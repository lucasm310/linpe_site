import React, { useState, useEffect } from "react";
import { Col, Row, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

import { ReactComponent as EfeitoSVG } from "../../assets/efeito_secaoinicio.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";
import { ReactComponent as Telegram } from "../../assets/telegram.svg";
import logo from "../../assets/logo.png";
import { getNoticas } from "../Noticias/services";

function Inicio() {
  const [noticias, SetNoticias] = useState([]);

  useEffect(() => {
    getNoticas(SetNoticias);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section id="inicio" className="sections">
      <EfeitoSVG className="testesvg d-none d-sm-block" />
      <Row className="no-gutters">
        <Col md={6} xs={12} className="index-itens">
          <Row className="mb-3">
            <Image className="logo mx-auto" src={logo} />
          </Row>
          <Row className="mb-3">
            <h2 className="titulo mx-auto">LIGA NACIONAL DE PERFUSÃO</h2>
          </Row>
          <Row className="justify-content-around">
            <Instagram
              className="click"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/linpe.perfusao/",
                  "_blank"
                )
              }
            />
            <Youtube
              className="click"
              onClick={() =>
                window.open(
                  "https://youtube.com/channel/UCkxJDzYjrudNQKruzW3gtMw",
                  "_blank"
                )
              }
            />
            <Telegram
              className="click"
              onClick={() =>
                window.open("https://t.me/joinchat/mzJtlB6_jOU5MjFh", "_blank")
              }
            />
          </Row>
        </Col>
        <Col md={6} xs={12} className="index-itens">
          <ListGroup className="lista-novidades float-right">
            {noticias.slice(0, 3).map((noticia) => (
              <ListGroup.Item
                key={noticia.noticiaID}
                action
                href={`/noticia/${noticia.noticiaID}`}
              >
                <Row className="align-items-center">
                  <Col md={12}>
                    <span className="texto-titulo mb-5">{noticia.titulo}</span>
                    <br />
                    <span className="texto-descri text-justify">
                      {noticia.resumo.substring(0, 100)}
                    </span>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <Link to="/noticias">
              <ListGroup.Item action>
                <Row className="align-items-center">
                  <span className="texto-titulo">Ver Mais</span>
                </Row>
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Col>
      </Row>
    </section>
  );
}

export default Inicio;
