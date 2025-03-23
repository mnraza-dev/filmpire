import {
  Box,
  Typography,
  AppBar,
  Drawer,
  Button,
  Avatar,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ToolBar } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness7, Brightness4 } from "@mui/icons-material";

const Navbar = ({ toggleColorMode }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  return (
    <>
      <AppBar position="fixed">
        <ToolBar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
            >
              <MenuIcon />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
