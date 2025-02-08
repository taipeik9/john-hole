import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import People from "./pages/People";
import Nav from "./pages/Nav";
import { Box, Typography } from "@mui/material";
import General from "./pages/General";
import Awards from "./pages/Awards";

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
        <Route path="/" element={<Navigate to="general" replace />} />
        <Route path="/general" element={<General />} />
        <Route path="/people" element={<People />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
