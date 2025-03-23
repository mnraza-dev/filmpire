import {
  Box,
  Typography,
  AppBar,
  Drawer,
  Toolbar,
  Button,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Link } from "react-router-dom";

import { useMediaQuery } from "@mui/material";

const Navbar = () => {
  const isMobile = useMediaQuery("max-width:600px");
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: 'none' }}
              onClick={() => {}}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
