import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Ecotourism from "./components/page/ecotourism";
import Airwater from "./components/page/airwater";
import NaturalFarming from "./components/page/natural-farming";
import Reforestation from "./components/page/reforestration";
import SeedBomb from "./components/page/seed-bomb";
import About from './components/page/about';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page/reforestation" component={Reforestation}/>
          <Route exact path="/page/naturalfarming" component={NaturalFarming}/>
          <Route exact path="/page/ecotourism" component={Ecotourism}/>
          <Route exact path="/page/seedsbomb" component={SeedBomb}/>
          <Route exact path="/page/airwater" component={Airwater }/>
          <Route exact path="/page/about" component={About}/>
          <Redirect to="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
