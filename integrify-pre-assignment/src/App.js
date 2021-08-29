import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardList from "./components/CardList";
import User from './components/User';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardList} />
        <Route path="/user/:id" component={User} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
