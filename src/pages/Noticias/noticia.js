import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../../sass/App.scss";
import NavBar from "../NavBar";
import { getNotica } from "./services";

function Noticia() {
  const { id } = useParams();
  const [noticia, SetNoticia] = useState({})

  useEffect(() => {
    getNotica(id, SetNoticia);
  }, []);

  return (
    <Container fluid className="pl-0 pr-0">
      <NavBar tab="noticias"/>
      <div>
        <h2 className="mt-3 mb-5 text-center font-weight-bold">{noticia.titulo}</h2>
        <div className="m-5" dangerouslySetInnerHTML={{ __html: noticia.conteudo}} />
      </div>
    </Container>
  );
}

export default Noticia;
