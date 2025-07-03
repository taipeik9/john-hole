import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import People from "./pages/People";
import Nav from "./pages/Nav";
import { Box, Typography } from "@mui/material";
import General from "./pages/General";
import Awards from "./pages/Awards";

function App() {
  return (
    <BrowserRouter basename="/john-hole">
      <Nav />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 2,
        }}
      >
        <Link to="/general" style={{ textDecoration: "none" }}>
          <Typography variant="h4">
            <span style={{ color: "#E40303" }}>J</span>
            <span style={{ color: "#FF8C00" }}>o</span>
            <span style={{ color: "#FFED00" }}>h</span>
            <span style={{ color: "#008026" }}>n</span>
            &nbsp;
            <span style={{ color: "#004DFF" }}>H</span>
            <span>🕳️</span>
            <span style={{ color: "#E40303" }}>l</span>
            <span style={{ color: "#FF8C00" }}>e</span>
          </Typography>
        </Link>
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
