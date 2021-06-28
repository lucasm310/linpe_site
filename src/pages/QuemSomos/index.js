import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import coracao from "../../assets/coracao.png";

function QuemSomos() {
  return (
    <section id="quem-somos" className="sections">
      <Row className="no-gutters">
        <Col md={4} xs={12} className="quem-somos-texto">
          <h1 className="font-weight-lighter">QUEM </h1>
          <h1 className="font-weight-bolder">
            <span className="somos">SOMOS</span>
          </h1>
        </Col>
        <Col md={8} xs={12} className="quem-somos-texto">
          <span>
            <p>
              A Liga Nacional de Perfusão foi fundada em janeiro de 2020 por
              estudantes que buscavam aprofundar seus conhecimentos na área da
              Perfusão. Desde então a LINPE tem proporcionado aos seus membros
              oportunidades de atividades didáticas, cientificas, culturais e
              sociais.
            </p>
            <p>
              Administrada pelos próprios estudantes, mas com orientação
              docente, tem sua atuação segundo o tripé da formação universitária
              ensino, pesquisa e extensão. Nossa missão é ajudar na divulgação e
              valorização da perfusão pelo Brasil, baseados na ética
              profissional e qualidade de informação.
            </p>
          </span>
        </Col>
        <Col md={12} className="coracao">
          <Image src={coracao} className="float-right coracao" />
        </Col>
      </Row>
    </section>
  );
}

export default QuemSomos;
