import React from "react";
import { Row, Col, CardDeck, Card } from "react-bootstrap";
import revista from "../../assets/revista.jpeg";
import ligas from "../../assets/ligas.jpeg";
import descomplicando from "../../assets/descomplicando.jpeg";

function Projetos() {
  return (
    <section id="projetos" className="sections">
      <Row>
        <Col className="sections-titulos">
          <h1>PROJETOS</h1>
        </Col>
      </Row>
      <Row className="projetos-cards">
        <Col md={10}>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Revista LINPE
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={revista} />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Descomplicando a Perfusão
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={descomplicando} />
            </Card>
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Ligas Academicas
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={ligas} />
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </section>
  );
}

export default Projetos;
