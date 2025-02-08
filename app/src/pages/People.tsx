import { useEffect, useRef, useState } from "react";
import {
  Container,
  ListItemText,
  Paper,
  Autocomplete,
  TextField,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import { Label } from "../assets/constants";
import ReactedText from "../components/ReactedText";

const labels = [
  { label: "texts", displayName: "# of Texts Sent" },
  { label: "image", displayName: "# of Images Sent" },
  { label: "messages", displayName: "# of Messages Sent" },
  { label: "reactions_sent", displayName: "# of Reactions Sent" },
  { label: "reactions_received", displayName: "# of Reactions Received" },
  { label: "hahas_sent", displayName: '# of "haha"s Sent' },
  { label: "word_count", displayName: "Total Word Count" },
  { label: "ratio", displayName: "Text-to-Reaction Ratio" },
];

export default function People() {
  const [data, setData] = useState<any>();
  const [selectedPerson, setSelectedPerson] = useState<any>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetch("src/message-data/summarized-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <Container maxWidth="sm" sx={{ p: 2 }}>
      <Typography variant="h5">People</Typography>
      <Typography sx={{ m: 1 }}>
        Search for your name, and if your name isn't in the list then search
        your number / iCloud email address. You will be able to see an overview
        of the selected person's statistics!
      </Typography>

      {data && (
        <Autocomplete
          disablePortal
          options={Object.keys(data).sort((a, b) => {
            const isANumber = a.startsWith("+");
            const isBNumber = b.startsWith("+");

            if (!isANumber && isBNumber) return -1; // Names come before numbers
            if (isANumber && !isBNumber) return 1; // Numbers come after names

            return isANumber ? a.localeCompare(b) : a.localeCompare(b);
          })}
          fullWidth
          onChange={(e: any, newVal: any | null) => {
            setSelectedPerson(data[newVal]);
            if (inputRef.current) {
              inputRef.current.blur();
            }
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select a person"
              inputRef={inputRef}
            />
          )}
        />
      )}

      {selectedPerson && (
        <Paper elevation={2}>
          <Grid container spacing={2}>
            {labels.map((label: Label) => (
              <Grid key={label.label} size={6}>
                <ListItemText
                  sx={{ m: 2 }}
                  primary={
                    label.label !== "ratio"
                      ? selectedPerson[label.label]
                      : Math.round(
                          (selectedPerson[label.label] + Number.EPSILON) * 100
                        ) / 100
                  }
                  secondary={label.displayName}
                />
              </Grid>
            ))}
          </Grid>
          <ReactedText messages={selectedPerson.most_reacted_text} />
        </Paper>
      )}
    </Container>
  );
}
