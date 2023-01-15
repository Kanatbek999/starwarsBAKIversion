import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from './../pages/index';
import SwapiService from './../../services/swapi-service';
import { Provider } from '../swapi-context/index';

const App = () => {
  const swapi = new SwapiService()
  return (
    <div>
    <Provider value={swapi}>
      <Header />
      <RandomPlanet />
      <PeoplePage />
    </Provider>
    </div>
  );
};

export default App;