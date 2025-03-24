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
import { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";

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
              <Button color="inherit" component={Link} to={`/profile/:id`} className="text-gray-800 " onClick={() => {}}>
                {/* Logout &nbsp; <Logout /> */}

                {!isMobile && <>Movies &nbsp; </>}
                <Avatar style={{
                  width:30, height:30,
                  alt="Profile"
                  src=""
                }}/>
              </Button>
            )}
          </div>
        </ToolBar>
      </AppBar>
    </>
  );
};

export default Navbar;
