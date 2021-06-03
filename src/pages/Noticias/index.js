import React from "react";
import { Container } from "react-bootstrap";
import "../../sass/App.scss";
import NavBar from "../NavBar";
import ListaNoticias from "./lista"

function Noticias() {
  return (
    <Container fluid className="pl-0 pr-0">
      <NavBar tab="noticias"/>
      <ListaNoticias />
    </Container>
  );
}

export default Noticias;
