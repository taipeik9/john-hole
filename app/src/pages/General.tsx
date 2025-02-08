import {
  Box,
  Container,
  Grid2 as Grid,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import MessageRanking from "../components/custom-graphs/MessageRanking";
import Ranking from "../components/Ranking";
import BarGraph from "../components/BarGraph";
import { Label } from "../assets/constants";
import ReactedText from "../components/ReactedText";

const labels = [
  { label: "texts", displayName: "# of Texts Sent" },
  { label: "image", displayName: "# of Images Sent" },
  { label: "reactions_count", displayName: "# of Reactions" },
  { label: "word_count", displayName: "Total Word Count" },
];

export default function General() {
  const [totalData, setTotalData] = useState<Record<string, any> | null>(null);

  const [rankingData, setRankingData] = useState<Record<string, number> | null>(
    null
  );

  const [messageRankingData, setMessageRankingData] = useState<Record<
    "texts" | "image" | "video",
    Record<string, number>
  > | null>(null);

  const [hahasSentData, setHahasSentData] = useState<Record<
    string,
    number
  > | null>(null);

  const [ratioData, setRatioData] = useState<Record<string, number> | null>(
    null
  );

  const [wordCountData, setWordCountData] = useState<Record<
    string,
    number
  > | null>(null);

  useEffect(() => {
    fetch("./message-data/totals.json")
      .then((res) => res.json())
      .then((data) => {
        setTotalData(data);
      });
  }, []);

  useEffect(() => {
    fetch("./message-data/message-ranking.json")
      .then((res) => res.json())
      .then((data) => {
        setRankingData(data);
      });
  }, []);

  useEffect(() => {
    fetch("./message-data/text-image-ranking.json")
      .then((res) => res.json())
      .then((data) => {
        setMessageRankingData(data);
      });
  }, []);

  useEffect(() => {
    fetch("./message-data/hahas-sent.json")
      .then((res) => res.json())
      .then((data) => {
        setHahasSentData(data);
      });
  }, []);

  useEffect(() => {
    fetch("./message-data/ratio.json")
      .then((res) => res.json())
      .then((data) => {
        setRatioData(data);
      });
  });

  useEffect(() => {
    fetch("./message-data/word-count.json")
      .then((res) => res.json())
      .then((data) => {
        setWordCountData(data);
      });
  });

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
        <Typography sx={{ m: 1 }}>
          <b>Note:</b> The graphs look much better on desktop rather than
          mobile. If you're on mobile, and you turn your phone sideways to view
          the graph better, you'll have to refresh for it to resize.
        </Typography>
      </Box>

      {totalData && (
        <Box maxWidth={600}>
          <Typography variant="h6">Total Hole Stats</Typography>
          <Paper elevation={2} sx={{ m: 2 }}>
            <Grid container spacing={2}>
              {labels.map((label: Label) => (
                <Grid size={6} key={label.label}>
                  <ListItemText
                    sx={{ m: 2 }}
                    primary={totalData[label.label]}
                    secondary={label.displayName}
                  />
                </Grid>
              ))}
            </Grid>
            <ReactedText messages={totalData.most_reacted_text} sender />
          </Paper>
        </Box>
      )}

      {messageRankingData && <MessageRanking data={messageRankingData} />}

      {rankingData && (
        <Ranking
          rankingData={rankingData}
          text="Top 5 Holers"
          unit="messages"
          medals
        />
      )}

      {ratioData && (
        <BarGraph
          data={ratioData}
          color="#5cfaa3"
          title="Messages-to-Reactions Received Ratio"
          roundText
        />
      )}
      <Typography sx={{ m: 1 }}>
        This graph represents holers' reaction ratios. Basically, your reaction
        ratio is how many reactions you received vs the amount of messages that
        you sent. For example, if my reaction ratio is 0.5 then that means: for
        every text that I sent, I received 0.5 reactions back, on average. In
        other words, I received half as many reactions back for texts that I
        sent out.
      </Typography>
      {ratioData && (
        <Ranking
          rankingData={ratioData}
          text="Top 5 Most Popular Holers"
          unit="reaction ratio"
          round
        />
      )}
      {hahasSentData && (
        <BarGraph data={hahasSentData} color="#ff94f7" title="Hahas Sent" />
      )}
      {hahasSentData && (
        <Ranking
          rankingData={hahasSentData}
          text="Top 5 Gigglers"
          unit="laughs"
        />
      )}

      {wordCountData && (
        <BarGraph data={wordCountData} color="#ffd359" title="Word Count" />
      )}
      {wordCountData && (
        <Ranking
          rankingData={wordCountData}
          text="Top 5 Authors"
          unit="words"
        />
      )}
    </Container>
  );
}
