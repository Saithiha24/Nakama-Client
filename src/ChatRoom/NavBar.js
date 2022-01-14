import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Tooltip,
  Typography,
  Box,
  Input,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import MenuProfile from "./MenuProfile";

const NavBar = () => {
  const [drawer, setDrawer] = useState(false);

  const drawerOpen = () => setDrawer(true);
  const drawerClose = () => {
    setDrawer(false);
  };

  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="d-flex justify-content-between">
          <Tooltip title="Find a user" onClick={drawerOpen}>
            <IconButton>
              <Search />
            </IconButton>
          </Tooltip>
          <Typography variant="h6">NAKAMA</Typography>
          <MenuProfile />
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <SwipeableDrawer
        anchor="left"
        open={drawer}
        onOpen={drawerOpen}
        onClose={drawerClose}
        variant="temporary"
        style={{ width: 100 }}
      >
        <Box className="bg-white" style={{ width: "100%" }}>
          <Input />
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default NavBar;
