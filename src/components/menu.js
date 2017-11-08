// react
import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import { NavLink } from 'react-router-dom';

// CSS
import './menu.css';

export default class Menu extends Component {
  state = { 
    show: true,
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      this.setState({show: false});
    }, 500)
  }

  handelToggle() {
    this.setState({ show: !this.state.show })
  }

  handelLinkClick(event) {
    if (event.target.classList.contains('navigation-list__item__link--active')) {
      event.preventDefault()
    }
  }

  mapNavigation(show, list) {
    return (
      <Transition in={show} timeout={150} appear={true}>
      {(status) => (
        <ul>
          {this.props.links.map( (item, i) =>
            <li 
            key={i} 
            className={`navigation-list__item MenuSlideInOut MenuSlideInOut-${status}`} 
            style={ {transitionDelay: `${i * 30}ms`}}>
              <NavLink 
                to={"/" + item} 
                className='navigation-list__item__link' 
                activeClassName="navigation-list__item__link--active"
                onClick={
                  this.handelLinkClick.bind(this)
                }
                >
                {item}
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </Transition>
    )
  } 

  render() {
    return (
      <div className={'menu-wrapper'}>
          <div className={(this.state.show) ? 'menu-icon menu-icon--open' : 'menu-icon'} onClick={this.handelToggle.bind(this)}>
            <span className='menu-icon__line'></span>
            <span className='menu-icon__line'></span>
            <span className='menu-icon__line'></span>
            <span className='menu-icon__line'></span>
            <span className='menu-icon__line'></span>
            <span className='menu-icon__line'></span>
          </div>
          <nav className='main-navigation'>
            {this.mapNavigation(!!this.state.show)}
          </nav>
      </div>
    );
  }
};