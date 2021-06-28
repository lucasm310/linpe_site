import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ReactGA from "react-ga";
import "../../sass/App.scss";

import NavBar from "../NavBar";
import Inicio from "../Inicio";
import QuemSomos from "../QuemSomos";
import Projetos from "../Projetos";
import Eventos from "../Eventos";
import CentrosFormadores from "../CentrosFormadores";
import Login from "../Login";

function Main() {
  const [active, setActive] = useState("inicio");
  const [scrollTop, setScrollTop] = useState(0);
  const height = window.screen.height;
  const history = useHistory();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  useEffect(() => {
    return history.listen((location) => {
      let pageName = `${location.pathname}${location.hash}`;
      ReactGA.set({ page: pageName });
      ReactGA.pageview(pageName);
    });
  }, [history]);

  useEffect(() => {
    const section = scrollTop / height + 0.25;
    if (section < 1) {
      setActive("inicio");
    } else if (section > 1 && section < 1.9) {
      setActive("quemsomos");
    } else if (section > 1.9 && section < 2.7) {
      setActive("projetos");
    } else if (section > 2.7 && section < 3.5) {
      setActive("eventos");
    } else if (section > 3.5 && section < 4.3) {
      setActive("centrosformadores");
    } else if (section > 4.3) {
      setActive("login");
    }
  }, [scrollTop]);

  return (
    <Container fluid className="pl-0 pr-0">
      <NavBar tab={active} />
      <Inicio />
      <QuemSomos />
      <Projetos />
      <Eventos />
      <CentrosFormadores />
      <Login />
    </Container>
  );
}

export default Main;
