import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import squirtle from "../../public/squirtle.png";

function Navigation() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width="30" className="me-2" />
          Pokeverse
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as="div">
            <NavLink className="nav-link" to="/">All Pokemon</NavLink>
          </Nav.Link>
          <Nav.Link as="div">
            <NavLink className="nav-link" to="/favourites">My Favourites</NavLink>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };
