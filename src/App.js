import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Pages
import MainView from './pages/mainview.js';

// css
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
      <Switch>
        <Route path="/:title" component={MainView}/>
        <Redirect from="" to="/hello"/>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
