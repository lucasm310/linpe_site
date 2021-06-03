import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import logo_ipessp from "../../assets/logo_ipessp.png";
import logo_issec from "../../assets/logo_issec.png";
import logo_hcm from "../../assets/logo_hcm.png";
import logo_cec_inc_rj from "../../assets/logo_cec_inc_rj.png";
import logo_incor from "../../assets/logo_incor.png";
import logo_dantepp from "../../assets/logo_dantepp.png";
import logo_unicamp from "../../assets/logo_unicamp.png";
import logo_unifesp from "../../assets/logo_unifesp.png";

function CentrosFormadores() {
  return (
    <section id="centros-formadores" className="sections">
      <Row>
        <Col className="sections-titulos">
          <h1>CENTROS FORMADORES</h1>
        </Col>
      </Row>
      <Row className="lista-centros-formadores">
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item">
            <Image src={logo_ipessp} className="ipessp" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item">
            <Image src={logo_issec} className="issec" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item">
            <Image src={logo_hcm} className="hcm" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item ">
            <Image src={logo_cec_inc_rj} className="cec_inc_rj" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item ">
            <Image src={logo_incor} className="incor" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item ">
            <Image src={logo_dantepp} className="dantepp" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item ">
            <Image src={logo_unicamp} className="unicamp" />
          </div>
        </Col>
        <Col md={3} className="d-flex justify-content-center mb-5">
          <div className="lista-item ">
            <Image src={logo_unifesp} className="unifesp" />
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default CentrosFormadores;
