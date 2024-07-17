import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Success from './pages/Success';
import React from 'react';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/order" exact>
          <Order />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
