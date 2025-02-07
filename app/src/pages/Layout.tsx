import type { ReactNode } from "react";
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

export default function Layout({
  openDrawer,
  handleOpenDrawer,
  handleCloseDrawer,
  children,
}: {
  openDrawer: boolean;
  handleOpenDrawer: () => void;
  handleCloseDrawer: () => void;
  children: ReactNode;
}) {
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
              <ListItemButton>
                <ListItem key={page.slug}>
                  <ListItemText primary={page.name} />
                </ListItem>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      {children}
      <IconButton
        sx={{ position: "absolute", top: "10px", left: "10px" }}
        onClick={handleOpenDrawer}
      >
        <MenuIcon />
      </IconButton>
    </Container>
  );
}
