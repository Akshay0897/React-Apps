import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route } from 'react-router-dom';
import Homepage from './components/pages/homepage/homepage.component';


const HatsPage = (props) => ( 
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
);
 

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' render={routeProps => <HatsPage {...routeProps}/> } />
      </Switch>
    </div>
  );
}

export default App;
