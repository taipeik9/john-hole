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
  messages: Message[] | null;
  sender?: boolean;
}) {
  return (
    <Box sx={{ p: 2 }}>
      {messages && (
        <>
          <Typography variant="body1">
            <b>Most Reacted to Message(s) of the Month</b>
          </Typography>
          {sender && <Typography>Sender: {messages[0].sender}</Typography>}
          <Typography>Reactions: {messages[0].reactions_received}</Typography>
          {messages.map((msg: Message) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                m: 1,
              }}
            >
              {msg.texts && (
                <Typography>
                  <i>{msg.texts}</i>
                </Typography>
              )}
              {msg.image && (
                <img style={{ width: "70%" }} src={`./${msg.image}`} />
              )}
              {msg.video && (
                <video
                  style={{ width: "70%" }}
                  src={`./${msg.video}`}
                  controls
                />
              )}
            </Box>
          ))}
        </>
      )}
    </Box>
  );
}
