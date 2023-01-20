import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {PeoplePage,  PlanetPage, StarshipsPage} from '../pages';
import SwapiService from './../../services/swapi-service';
import { Provider } from '../swapi-context';
import {BrowserRouter as Router, generatePath, Route, Switch} from "react-router-dom";

const Home = ()=>(
  <div>
    <PeoplePage/>
  </div>
)
const NotFound = ()=>(
  <div>
    The page is not found : [
  </div>
)

const App = () => {
  const swapi = new SwapiService() 
  return (
    <div>
    <Provider value={swapi}>
      <Router>
          <Header />
          <RandomPlanet />
          <Switch>
          <Route exact={true} path="/planets/"> <PlanetPage /> </Route>
          <Route exact={true} path="/starships/"> <StarshipsPage /> </Route>
          <Route exact={true} path="/people/"/> <PeoplePage /> <Route/>
          <Route exact={true} path="/"> <Home /> </Route>
          <Route path="*" component={NotFound} />
          </Switch>
      </Router>
    </Provider>
    </div>
  );
};
export default App;
