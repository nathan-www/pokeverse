import React, { useEffect } from "react";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { PokemonDetails } from "./routes/PokemonDetails";
import { Home } from "./routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { PokemonDetails } from "./routes/PokemonDetails";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(pokeApi)
      .then((resp) => resp.json())
      .then((resp) => {
        setPokemonList(resp.results);
      });
  }, []);

  return (
    <BrowserRouter>
      <div data-testid="app">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home pokemonList={pokemonList}></Home>}></Route>
          <Route path="/:name" element={<PokemonDetails></PokemonDetails>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export { App };
