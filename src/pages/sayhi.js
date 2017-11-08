// React
import React, { Component } from 'react';

// Components
import Form from '../components/form.js';

// Assets
import git from '../assets/git.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

// CSS
import './pages.css';
import './sayhi.css';

export default class Sayhi extends Component {

  render() {
    return (
      <section className="grid-container">
        <div className="grid-container__title">
          <h1 className="sayhi__title">say<br/><strong>hello</strong>!<br/></h1>
          <address className="sayhi__address">
            <a className="sayhi__address__link" href="mailto:hi@dsandberg.se">hi@dsandberg.se</a>
            <a className="sayhi__address__link" href="tel:+46722821981">+46 72 282 19 81</a>
            stockholm, sweden
          </address>
            <div className="sayhi__social-wrapper">
              <img className="sayhi__social-wrapper__link" alt="git" src={git}/>
              <img className="sayhi__social-wrapper__link" alt="linkedin" src={linkedin}/>
              <img className="sayhi__social-wrapper__link" alt="instagram" src={instagram}/>
            </div>
          </div>
          <div className="grid-container__content" src={instagram}>
            <Form/>
          </div>
      </section>
    )
  }
}