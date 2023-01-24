import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PokemonCard({ url, name }) {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        setPokemonData(resp);
      });
  }, []);

  return (
    pokemonData.hasOwnProperty("sprites") && (
      <Card>
        <Card.Img variant="top" src={pokemonData.sprites.front_default} />
        <Card.Body>
          <Card.Title>
            <Link to={"/" + name}>{name}</Link>
          </Card.Title>
          <Card.Text>
            <ul>
              {pokemonData.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  );
}

export { PokemonCard };
