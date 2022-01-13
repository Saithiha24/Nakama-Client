import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import MenuProfile from "./MenuProfile";

const NavBar = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar className="d-flex justify-content-between">
          <Tooltip title="Find a user">
            <IconButton>
              <Search />
            </IconButton>
          </Tooltip>
          <Typography variant="h6">NAKAMA</Typography>
          <MenuProfile />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
