import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const MansPage = (props) => {
  return (
    <div>
      <h1>MANS PAGE</h1>
    </div>
  );
};
const WomansPage = (props) => {
  return (
    <div>
      <h1>WOMANS PAGE</h1>
    </div>
  );
};

const JacketsPage = (props) => {
  return (
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/jackets" component={JacketsPage} />
        <Route path="/womans" component={WomansPage} />
        <Route path="/mans" component={MansPage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
