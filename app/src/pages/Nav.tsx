import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import { Page, pages } from "../assets/constants";

export default function Nav() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <Drawer open={openDrawer} onClose={handleCloseDrawer}>
        <List>
          <ListItem>
            <Box display="flex" width="100%" justifyContent="end">
              <IconButton onClick={handleCloseDrawer}>
                <MenuOpenIcon />
              </IconButton>
            </Box>
          </ListItem>
          {pages.map((page: Page) => {
            return (
              <ListItemButton
                key={page.slug}
                onClick={() => {
                  navigate(page.slug);
                  handleCloseDrawer();
                }}
              >
                <ListItem>
                  <ListItemText primary={page.name} />
                </ListItem>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        sx={{ position: "absolute", top: "10px", left: "10px" }}
        onClick={handleOpenDrawer}
      >
        <MenuIcon />
      </IconButton>
    </Container>
  );
}
