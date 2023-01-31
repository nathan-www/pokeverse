import React, { useEffect, useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FavouritesContext } from "../FavouritesProvider";

function PokemonCard({ url, name }) {
  const [pokemonData, setPokemonData] = useState({});
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

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

          {favourites.includes(name) ? ( <Button variant="danger" onClick={() => removeFavourite(name)}>
              Remove from Favorites
            </Button> ) : (
            <Button variant="primary" onClick={() => addFavourite(name)}>
              Add to Favorites
            </Button>
          )}
        </Card.Body>
      </Card>
    )
  );
}

export { PokemonCard };
