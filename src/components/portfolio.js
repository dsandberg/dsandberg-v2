import React, { Component } from 'react';

// Assets
import adventurestories from '../assets/portfolio_adventurestories.png';

// CSS
import './portfolio.css';

export default class Portfolio extends Component {

    render () {
        return (
            <section className="portfolio">
                <img className="portfolio__image" alt="" src={adventurestories}/>
                <h2 className="portfolio__title">adventurestories.se</h2>
                <p className="portfolio__text">Wordpress Theme, jQuery...</p>
                <button className="portfolio__button portfolio__button--transparent">view site</button>
                <button className="portfolio__button portfolio__button--fill">view sorc</button>
            </section>
        )
    }
}

