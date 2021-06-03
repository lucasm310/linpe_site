import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import coracao from "../../assets/coracao.png";

function QuemSomos() {
  return (
    <section id="quem-somos" className="sections">
      <Row>
        <Col md={4} xs={12} className="quem-somos-texto">
          <h1 className="font-weight-lighter">QUEM </h1>
          <h1 className="font-weight-bolder">
            <span className="somos">SOMOS</span>
          </h1>
        </Col>
        <Col md={8} xs={12} className="quem-somos-texto">
          <span>
            <p>
              A Liga Nacional de Perfusão (LINPE) é uma entidade autônoma, sem
              fins lucrativos ligada a parte Científica da Sociedade Brasileira
              de Circulação Extracorpórea (SBCEC), com o dever de propagar a
              Perfusão Extracorpórea pelo Brasil no meio acadêmico.
            </p>
            <p>
              Fundada por amantes de Perfusão, e conta com uma Diretoria formada
              por Graduandos e Graduados dos cursos da saúde em que permite ser
              Perfusionista.
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
