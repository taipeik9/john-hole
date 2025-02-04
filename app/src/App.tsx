import { useEffect, useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/material";

function App() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetch("src/message-data/summarized-data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  });

  return <Container></Container>;
}

export default App;
