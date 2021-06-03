import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Main'
import Noticias from './Noticias'
import Noticia from './Noticias/noticia'

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
