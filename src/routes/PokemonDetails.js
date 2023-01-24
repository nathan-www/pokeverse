import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

function PokemonDetails() {
  const params = useParams();
  [pokemon, setPokemon] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + params.name)
      .then((resp) => resp.json())
      .then((resp) => {
        setPokemon(resp);
      });
  }, []);

  if (pokemon == false) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="container">
        <Card>
          <Card.Body>
            <h1>{pokemon.name}</h1>
            <br></br>

            <p>
              <b>Height:</b> {pokemon.height}
            </p>
            <p>
              <b>Weight:</b> {pokemon.weight}
            </p>
            <p>
              <b>Abilities:</b>
            </p>
            <ul>
              {pokemon.abilities.map((ability) => (
                <li>{ability.ability.name}</li>
              ))}
            </ul>
            <p>
              <b>Types:</b>
            </p>
            <ul>
              {pokemon.types.map((type) => (
                <li>{type.type.name}</li>
              ))}
            </ul>
            <p>
              <b>Stats:</b>
            </p>
            <ul>
              {pokemon.stats.map((stat) => (
                <li>
                  <b>{stat.stat.name}:</b> {stat.base_stat}
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export { PokemonDetails };
