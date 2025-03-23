import {
  Box,
  Typography,
  AppBar,
  Drawer,
  Button,
  Avatar,
  IconButton,
  TextField,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ToolBar } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <AppBar position="fixed">
        <ToolBar>
          {isMobile && (
            <IconButton
              className="flex mr-0 lg:mr-2 flex-wrap "
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
            >
              <MenuIcon />
            </IconButton>
          )}
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
