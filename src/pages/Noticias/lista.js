import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CardColumns, Card } from "react-bootstrap";
import "../../sass/App.scss";
import { getNoticas } from "./services";

function ListaNoticias() {
  const [noticias, SetNoticias] = useState([]);
  const history = useHistory();

  const handlerClick = (event, noticiaID) => {
    event.preventDefault()
    history.push(`/noticia/${noticiaID}`)
  }

  useEffect(() => {
    getNoticas(SetNoticias);
  }, []);

  return (
    <CardColumns>
      {noticias.map((noticia) => (
        <Card key={noticia.noticiaID} className="text-center" onClick={(event) => {handlerClick(event, noticia.noticiaID)}}>
          <Card.Body>
            <Card.Title className="text-capitalize">{noticia.titulo}</Card.Title>
            <Card.Text>{noticia.resumo}</Card.Text>
            <Card.Text>
              <small className="text-muted">{noticia.data_cadastro.toLocaleString()}</small>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
}

export default ListaNoticias;
