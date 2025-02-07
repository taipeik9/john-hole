import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./pages/People";
import Nav from "./pages/Nav";
import { Box, Typography } from "@mui/material";
import General from "./pages/General";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 2,
        }}
      >
        <Typography variant="h4">John H🕳️le </Typography>
      </Box>
      <Routes>
        <Route path="/general" element={<General />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
