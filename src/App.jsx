import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Actors from './components/Actors/Actors';
import Profile from './components/Profile/Profile';
import Movies from "./components/Movies/Movies";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies/>} />
          <Route path="/movie/:id" element={<h1>Hi there</h1>} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <main></main>
    </div>
  );
};

export default App;
