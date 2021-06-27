import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";
import "../../sass/App.scss";
import NavBar from "../NavBar";
import ListaNoticias from "./lista";

function Noticias() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  return (
    <Container fluid className="pl-0 pr-0">
      <NavBar tab="noticias" />
      <ListaNoticias />
    </Container>
  );
}

export default Noticias;
