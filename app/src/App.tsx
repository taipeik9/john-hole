import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./pages/People";
import Nav from "./pages/Nav";
import { Box, Typography } from "@mui/material";

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
        <Typography variant="h4">John Hole 🕳️</Typography>
      </Box>
      <Routes>
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
