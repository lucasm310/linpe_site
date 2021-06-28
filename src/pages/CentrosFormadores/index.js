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

const centros = [
  {
    name: "ipessp",
    url: "http://www.ipessp.edu.br/site/cursos/extracorporea-e-assistencia-circulatoria-mecanica/",
    logo: logo_ipessp,
  },
  {
    name: "issec",
    url: "http://www.iseec.com.br/circula%C3%A7%C3%A3o-extracorp%C3%B3rea-e-suporte-de-vida-avan%C3%A7ado.html",
    logo: logo_issec,
  },
  {
    name: "hcm",
    url: "http://www.hcmriopreto.com.br/",
    logo: logo_hcm,
  },
  {
    name: "cec_inc_rj",
    url: "https://sbcec.com.br/br/index.php/congresso-cursos-eventos/centros-formadores/44-training/centros-perfusao-brasil/240-curso-de-circulacao-extracorporea.html",
    logo: logo_cec_inc_rj,
  },
  {
    name: "incor",
    url: "https://referenciaincor.com.br/cursos/especializacao-em-circulacao-extracorporea-e-assistencia-circulatoria-mecanica/",
    logo: logo_incor,
  },
  {
    name: "dantepp",
    url: "http://www.idpc.org.br/?Fuseaction=Home",
    logo: logo_dantepp,
  },
  {
    name: "unicamp",
    url: "https://sbcec.com.br/br/index.php/congresso-cursos-eventos/centros-formadores/44-training/centros-perfusao-brasil/89-cursos-escola-de-extensao-unicamp-campinas-perfusao-enfermagem-biomedico.html",
    logo: logo_unicamp,
  },
  {
    name: "unifesp",
    url: "https://sp.unifesp.br/epm/cardiovascular/cursos/perfusao",
    logo: logo_unifesp,
  },
];

function CentrosFormadores() {
  return (
    <section id="centros-formadores" className="sections">
      <Row className="no-gutters">
        <Col className="sections-titulos">
          <h1>CENTROS FORMADORES</h1>
        </Col>
      </Row>
      <Row className="lista-centros-formadores no-gutters">
        {centros.map((centro, idx) => (
          <Col key={idx} md={3} className="d-flex justify-content-center mb-5">
            <div className="lista-item">
              <Image
                src={centro.logo}
                className={centro.name}
                onClick={() => window.open(centro.url, "_blank")}
              />
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default CentrosFormadores;
