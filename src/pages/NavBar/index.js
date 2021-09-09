import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar(props) {
  const { tab } = props;
  let tabs = {
    inicio: tab === "inicio" ? true : false,
    quemSomos: tab === "quemsomos" ? true : false,
    projetos: tab === "projetos" ? true : false,
    eventos: tab === "eventos" ? true : false,
    centrosFormadores: tab === "centrosformadores" ? true : false,
    login: tab === "login" ? true : false,
    noticias: tab === "noticias" ? true : false,
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      sticky="top"
      className="navbar-custom"
    >
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="mr-auto"></div>
        <Nav className="lg-float-right">
          <Nav.Link className="itens-menu" href="/#inicio" active={tabs.inicio}>
            Inicio
          </Nav.Link>
          <Nav.Link
            className="itens-menu"
            href="/#quem-somos"
            active={tabs.quemSomos}
          >
            Quem Somos
          </Nav.Link>
          <Nav.Link
            className="itens-menu"
            href="/#projetos"
            active={tabs.projetos}
          >
            Projetos
          </Nav.Link>
          <Nav.Link
            className="itens-menu"
            href="/#eventos"
            active={tabs.eventos}
          >
            Eventos
          </Nav.Link>
          <Nav.Link
            className="itens-menu"
            href="/#centros-formadores"
            active={tabs.centrosFormadores}
          >
            Centros Formadores
          </Nav.Link>
          <Nav.Link className="itens-menu" href="/#login" active={tabs.login}>
            Login
          </Nav.Link>
          <Nav.Link
            className="itens-menu"
            href="/noticias/"
            active={tabs.noticias}
          >
            Noticias
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
