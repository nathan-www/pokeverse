import { FavouritesContext } from "../FavouritesProvider";
import { useContext } from "react";
import { PokemonCard } from "../components/PokemonCard";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Favourites(props) {
  const { favourites, addFavourite, removeFavourite } =
    useContext(FavouritesContext);

  return (
    <Container>
      <br></br>

      <Container fluid>
        <Row>
          {props.pokemonList
            .filter((pokemon) => favourites.includes(pokemon.name))
            .map((pokemon) => (
              <Col md={3} key={pokemon.name} style={{ marginBottom: "25px" }}>
                <PokemonCard name={pokemon.name} url={pokemon.url} />
              </Col>
            ))}
        </Row>
      </Container>
    </Container>
  );
}

export { Favourites };
