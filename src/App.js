import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Detail from './views/detail';
import Home from './views/home';

function App() {
  return (
    <Switch>
      <Route path="/shows/:movieId" component={ Detail }></Route>
      <Route path="/" component={ Home }></Route>
    </Switch>
  );
}

export default App;
