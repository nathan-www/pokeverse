import React, { useEffect } from "react";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const LIMIT = 15;
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
    <div data-testid="app">
      <Navigation />

      <Container>
        <br></br>

        <Container style={{width: 450}}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            <Form.Control onChange={(e) => setSearchQuery(e.target.value)} />
          </InputGroup>
        </Container>

        <br></br>

        <Container fluid>
          <Row>
            {pokemonList.filter((pokemon) => pokemon.name.includes(searchQuery)).map((pokemon) => (
              <Col md={3} key={pokemon.name} style={{ "marginBottom": "25px" }}>
                <PokemonCard
                  name={pokemon.name}
                  url={pokemon.url}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export { App };
