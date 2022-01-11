import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Tooltip title="add a user">
            <IconButton>
              <Search />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
