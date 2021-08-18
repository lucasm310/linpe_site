import React, { useState } from "react";
import { Row, Col, CardDeck, Card } from "react-bootstrap";
import revista from "../../assets/revista.jpeg";
import ligas from "../../assets/ligas.jpeg";
import descomplicando from "../../assets/descomplicando.jpeg";
import mapasMentais from "../../assets/mapasMentais.jpeg";
import Ligas from "./modalLigas";
import Descomplicando from "./modalDesc";
import Mapas from "./modalMapas";


function Projetos() {
  const [showModalLigas, setShowModalLigas] = useState(false);
  const [showModalDesc, setShowModalDesc] = useState(false);
  const [showModalMapa, setShowModalMapa] = useState(false);

  const closeModalLigas = () => {
    setShowModalLigas(false);
  };

  const closeModalDescomplicando = () => {
    setShowModalDesc(false);
  };

  const closeModalMapas = () => {
    setShowModalMapa(false);
  };

  return (
    <section id="projetos" className="sections">
      <Row className="no-gutters">
        <Col className="sections-titulos">
          <h1>PROJETOS</h1>
        </Col>
      </Row>
      <Row className="projetos-cards no-gutters">
        <Col md={11}>
          <CardDeck>
            <Card>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Revista LINPE
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={revista} />
            </Card>
            <Card onClick={() => setShowModalMapa(true)}>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Mapas Mentais
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={mapasMentais} />
            </Card>
            <Card onClick={() => setShowModalDesc(true)}>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Descomplicando a Perfusão
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={descomplicando} />
            </Card>
            <Card onClick={() => setShowModalLigas(true)}>
              <Card.Body>
                <Card.Title className="font-weight-bolder">
                  Ligas Acadêmicas
                </Card.Title>
              </Card.Body>
              <Card.Img variant="bottom" src={ligas} />
            </Card>
          </CardDeck>
        </Col>
      </Row>
      <Ligas onClose={closeModalLigas} open={showModalLigas} />
      <Descomplicando onClose={closeModalDescomplicando} open={showModalDesc} />
      <Mapas onClose={closeModalMapas} open={showModalMapa}/>
    </section>
  );
}

export default Projetos;
