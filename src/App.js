import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Pages
import MainView from './pages/mainview.js';

// css
import './App.css';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Route path="/:title" component={MainView}/>
      </BrowserRouter>
    );
  }
}

export default App;
