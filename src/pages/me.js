// React
import React, { Component } from 'react';

// CSS
import './pages.css';
import './me.css';

export default class Me extends Component {

  render() {
    return (
      <section className="grid-container">
        <div className="grid-container__title">
          <h1 className="me__title">somting<br/><strong>about</strong><br/>me</h1>
        </div>
          <div className="grid-container__content">
            <div className="me-wrapper">
            <section className="me-section">
              <h2 className="me-section__title">story:</h2>
              <p className="me-section__text">Has ut debet convenire explicari, ea vim omnis mundi detracto. Singulis inimicus repudiare qui in. Habemus appetere ne ius, per adhuc alterum patrioque eu. Fierent theophrastus no per, cu veritus perfecto pri. Decore quidam ex mel, lobortis explicari vix te. In cum paulo maiestatis necessitatibus. Usu ex epicurei officiis.<br/><br/>
  Ut duis dissentias signiferumque vel. Meliore voluptatum no per, ne ius esse reprimique. Nemore luptatum sententiae vix ex. Ne sea sumo referrentur, graeci senserit in eum.</p> 
            </section>
            <section className="me-section">
              <h2 className="me-section__title">experiance:</h2>
              <p className="me-section__text">html5, css3, sass, js, jQuery, react.js, node.js, npm, express, gulp, webpack, git, openshift, mongoDB, mySQL...</p> 
            </section>
            <section className="me-section">
              <h2 className="me-section__title">software:</h2>
              <p className="me-section__text">photoshop, illustrator, indesign, sketch, slack, postman</p> 
            </section>
          </div> 
          </div> 
      </section>
    )
  }
}