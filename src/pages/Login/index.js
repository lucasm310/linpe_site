import React, { useReducer } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  return (
    <section id="login" className="sections">
      <Row>
        <Col className="sections-titulos">
          <h1>LOGIN</h1>
        </Col>
      </Row>
      
      <Row className="texto topo">
        <Col md={8} xs={12} >
          <h4>
            Cadastre em nossa plataforma para ter acesso a conteúdos exclusivos!
          </h4>
        </Col>
      </Row>
      <Row className="texto">
        <Col md={4} xs={8} >
          <Button size="lg" block className="logar" onClick={()=> window.open("http://localhost:3001", "_blank")}>Cadastrar / Entrar</Button>
        </Col>
      </Row>
    </section>
  );
}

export default Login;
