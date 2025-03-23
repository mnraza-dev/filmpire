import { CssBaseline } from "@mui/material";
import React, { useState } from "react";
import {  Routes, Route } from "react-router-dom";
import {
  Actors,
  Movies,
  Profile,
  Navbar,
  MovieInformation,
} from "./components";
import {
  Content,
  Root,
  ToolBar,
} from "./components/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <CssBaseline />
        <Navbar toggleColorMode={toggleColorMode} />

        <Content>
          <ToolBar />
         
            <Routes>
              <Route path="/" element={<Movies />} />
              <Route path="/movie/:id" element={<MovieInformation />} />
              <Route path="/actors/:id" element={<Actors />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
         
        </Content>
      </Root>
    </ThemeProvider>
  );
};

export default App;
