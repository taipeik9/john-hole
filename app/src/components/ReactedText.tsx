import { Box, Typography } from "@mui/material";

type Message = {
  sender: string;
  texts: string | null;
  image: string | null;
  video: string | null;
  reactions_received: number;
};

export default function ReactedText({
  messages,
  sender,
}: {
  messages: Message[];
  sender?: boolean;
}) {
  return (
    <Box>
      {messages.map((msg: Message) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography variant="body1">
            Most Reacted to Message of the Month
          </Typography>
          {sender && <Typography>Sender: {msg.sender}</Typography>}
          <Typography>Reactions: {msg.reactions_received}</Typography>
          {msg.texts && <Typography>{msg.texts}</Typography>}
          {msg.image && (
            <img style={{ width: "70%" }} src={`src/${msg.image}`} />
          )}
        </Box>
      ))}
    </Box>
  );
}
