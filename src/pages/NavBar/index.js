import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// import { Container } from './styles';

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
          <Nav.Link 
            className="itens-menu"
            href="/#inicio"
            active={tabs.inicio}
          >
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
          <Nav.Link className="itens-menu" href="#login" active={tabs.login}>
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
    //   <Navbar collapseOnSelect expand="lg" bg="white" sticky="top"  className="navbar-custom">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //       <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default NavBar;
