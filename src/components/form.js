import React, { Component } from 'react';

// CSS
import './form.css';

// Assets
import send_icon from '../assets/ic_send_black_24px.svg'

export default class Form extends Component {

    render () {
        return (
            <form className="form">
                <label className="form__label" htmlFor="contact_name">Name:</label>
                <input className="form__input" id="contact_name" type="text" placeholder="name"/>
                <label className="form__label" htmlFor="contact_email">eMail:</label>
                <input className="form__input" id="contact_email" type="email" placeholder="email"/>
                <label className="form__label" htmlFor="contact_message">Message:</label>
                <textarea className="form__massage" id="contact_message" placeholder="message" />
                <button className="form__button" style={{backgroundImage: `url(${send_icon})`}}></button>
            </form>
        )
    }
}

