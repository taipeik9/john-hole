import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";

export default function Ranking({
  rankingData,
  text,
  unit,
  medals,
  round,
}: {
  rankingData: Record<string, number>;
  text: string;
  unit: string;
  medals?: boolean;
  round?: boolean;
}) {
  return (
    <Box sx={{ m: 2, maxWidth: 400, width: "100%" }}>
      <Typography variant="h6">{text}</Typography>
      <Paper elevation={2}>
        <List>
          {Object.keys(rankingData)
            .slice(0, 5)
            .map((person: string, i: number) => (
              <ListItem key={person}>
                <ListItemText
                  primary={`${person}${
                    medals
                      ? i === 0
                        ? " 🥇"
                        : i === 1
                        ? " 🥈"
                        : i === 2
                        ? " 🥉"
                        : ""
                      : ""
                  }`}
                  secondary={`${
                    round
                      ? Math.round(
                          (rankingData[person] + Number.EPSILON) * 100
                        ) / 100
                      : rankingData[person]
                  } ${unit}`}
                />
              </ListItem>
            ))}
        </List>
      </Paper>
    </Box>
  );
}
