// React
import React, { Component } from 'react';

// Components
import Portfolio from '../components/portfolio.js';

// CSS
import './pages.css';
import './stuff.css';

export default class Stuff extends Component {

  render() {
    return (
      <section className="grid-container">
        <div className="grid-container__title">
          <h1 className="stuff__title"><strong>things</strong><br/>I've<br/>done</h1>
        </div>
        <div className="grid-container__content">
          <Portfolio/>
        </div>
      </section>
    )
  }
}