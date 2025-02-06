import { useEffect, useState } from "react";
import "./App.css";
import {
  Container,
  ListItemText,
  List,
  ListItem,
  Paper,
  Autocomplete,
  TextField,
} from "@mui/material";

type Label = {
  label: string;
  displayName: string;
};

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

function App() {
  const [data, setData] = useState<any>();
  const [selectedPerson, setSelectedPerson] = useState<any>(null);

  useEffect(() => {
    fetch("src/message-data/summarized-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return (
    <Container sx={{ p: 2 }}>
      {data && (
        <Autocomplete
          disablePortal
          options={Object.keys(data)}
          sx={{ width: 300 }}
          onChange={(e: any, newVal: any | null) => {
            console.log(newVal);
            setSelectedPerson(data[newVal]);
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select a person" />
          )}
        />
      )}

      {selectedPerson && (
        <Paper elevation={2}>
          <List>
            {labels.map((label: Label) => (
              <ListItem key={label.label}>
                <ListItemText
                  primary={
                    label.label !== "ratio"
                      ? selectedPerson[label.label]
                      : Math.round(
                          (selectedPerson[label.label] + Number.EPSILON) * 100
                        ) / 100
                  }
                  secondary={label.displayName}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Container>
  );
}

export default App;
