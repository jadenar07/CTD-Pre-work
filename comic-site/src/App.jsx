import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../Pages/Home/Home";
import StarWarsPage from "../Pages/ComicPage/StarWarsPage";
import PlanetsPage from "../Pages/CharactersPage/PlanetsPage";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<StarWarsPage />} />
        <Route path="/planets" element={<PlanetsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
