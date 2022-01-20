import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Pokedex from "./components/pokedex/pokedex";
import Movies from "./components/movies/movies";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
