import { CssBaseline } from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Actors,
  Movies,
  Profile,
  Navbar,
  MovieInformation,
} from "./components";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default App;
