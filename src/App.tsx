import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import ProducComponent from "./components/Product";

function App() {
  return (
    <Container fluid>
      <Router>
        <Switch>
          <Route path="/product/:id" children={<ProducComponent />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
