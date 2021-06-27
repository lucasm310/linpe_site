import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";
import Main from "./Main";
import Noticias from "./Noticias";
import Noticia from "./Noticias/noticia";

const { REACT_GOOGLEGA } = process.env;
ReactGA.initialize(REACT_GOOGLEGA);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/noticias">
          <Noticias />
        </Route>
        <Route path="/noticia/:id">
          <Noticia />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
