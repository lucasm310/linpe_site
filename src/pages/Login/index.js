import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const { REACT_APP_URL } = process.env;

function Login() {
  return (
    <section id="login" className="sections">
      <Row className="no-gutters">
        <Col className="sections-titulos">
          <h1>LOGIN</h1>
        </Col>
      </Row>

      <Row className="texto topo no-gutters">
        <Col md={8} xs={12}>
          <h4>
            Ao realizar seu cadastro você terá vantagens como: acesso a
            conteúdos exclusivos da LINPE, aulas, resumos, informações
            privilegiada, eventos.
          </h4>
          <h4>Venha fazer parte da LINPE e cresça conosco.</h4>
        </Col>
      </Row>
      <Row className="texto no-gutters">
        <Col md={4} xs={8}>
          <Button
            size="lg"
            block
            className="logar"
            onClick={() => window.open(REACT_APP_URL, "_blank")}
          >
            Cadastrar / Entrar
          </Button>
        </Col>
      </Row>
    </section>
  );
}

export default Login;
