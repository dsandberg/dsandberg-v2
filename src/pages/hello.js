// React
import React, { Component } from 'react';

// Assets
import logo from '../assets/logo.svg';

// CSS
import './pages.css';
import './hello.css';

export default class Hello extends Component {

  render() {
    return (
      <section className="grid-container">
        <div className="grid-container__title">
          <h1 className="hello__title">hi!<br/> I’m <strong>daniel</strong></h1>
        </div> 
        <div className="grid-container__content">
          <img className="hello__logo" alt="logo_dsandberg" src={logo}/>
        </div> 
      </section>
    )
  }
}