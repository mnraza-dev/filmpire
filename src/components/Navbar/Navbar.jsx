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
import {
  Brightness7,
  Brightness4,
  AccountCircle,
  Logout,
} from "@mui/icons-material";
import { useState } from "react";

const Navbar = ({ toggleColorMode }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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

          {!isMobile && "Search ..."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                sx={{
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  sx={{
                    width: 30,
                    height: 30,
                  }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobile && "Search.."}
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
