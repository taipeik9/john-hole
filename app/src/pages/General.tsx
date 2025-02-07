import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MessageRanking from "../components/graphs/MessageRanking";
import HahasSent from "../components/graphs/HahasSent";
import Ranking from "../components/Ranking";

export default function General() {
  const [rankingData, setRankingData] = useState<Record<string, number> | null>(
    null
  );

  const [messageRankingData, setMessageRankingData] = useState<Record<
    "texts" | "image",
    Record<string, number>
  > | null>(null);

  const [hahasSentData, setHahasSentData] = useState<Record<
    string,
    number
  > | null>(null);

  useEffect(() => {
    fetch("src/message-data/message-ranking.json")
      .then((res) => res.json())
      .then((data) => {
        setRankingData(data);
      });
  }, []);

  useEffect(() => {
    fetch("src/message-data/text-image-ranking.json")
      .then((res) => res.json())
      .then((data) => {
        setMessageRankingData(data);
      });
  }, []);

  useEffect(() => {
    fetch("src/message-data/hahas-sent.json")
      .then((res) => res.json())
      .then((data) => {
        setHahasSentData(data);
      });
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h5">General</Typography>
        <Typography sx={{ m: 1 }}>
          Here you will find all of the summarized John Hole data for the month!
          This is represented through rankings and graphs. If you aren't on the
          graphs / rankings, you probably didn't engage enough in the hole,
          better luck next month!
        </Typography>
      </Box>
      {messageRankingData && <MessageRanking data={messageRankingData} />}

      {rankingData && (
        <Ranking
          rankingData={rankingData}
          text="Top 5 Holers"
          unit="messages"
          medals
        />
      )}
      {hahasSentData && <HahasSent data={hahasSentData} />}
      {hahasSentData && (
        <Ranking
          rankingData={hahasSentData}
          text="Top 5 Gigglers"
          unit="laughs"
        />
      )}
    </Container>
  );
}
