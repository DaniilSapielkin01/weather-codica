import React from "react";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import { Container } from "@material-ui/core";

import "./App.css";
import BodyCardContainer from "./container/BodyCardContainer";
import CitiesContainer from "./container/CitiesContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Container maxWidth="md">
        <Route exact path="/" render={() => <CitiesContainer />} />
      </Container>
      <Container maxWidth="sm">
        <Route path="/bodycard/:id?" render={() => <BodyCardContainer />} />
      </Container>
    </div>
  );
};

export default compose(withRouter)(App);
