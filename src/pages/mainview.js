// React
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import Menu from '../components/menu.js';
import Pagination from '../components/pagination.js';
import ScrollNav from '../components/scroll-nav.js';
import ScrollIcon from '../components/scroll-icon.js';

// Pages
import Hello from './hello.js';
import Stuff from './stuff.js';
import Me from './me.js';
import Sayhi from './sayhi.js';

// CSS
import './mainview.css';
import '../components/scroll-icon.css';

// Assets
import logo from '../assets/logo.svg';
import background from '../assets/background.jpg';
import transparent from '../assets/bg-transparent.png';

export default class MainView extends Component {

  state = {
    links: ['hello', 'stuff', 'me', 'sayhi'],
    animation: 'fade--up',
  };

  backgroundColor() {
    return "main-bg--" + this.props.match.params.title;
  }

  backgroundImage() {
    if (this.props.match.params.title === "sayhi") {
      return {backgroundImage: `url(${background})`}
    } else {
      return {backgroundImage: `url(${transparent})`}
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      animation: (this.moveUp(this.props.match.params.title, newProps.match.params.title, this.state.links)) ? 'fade--down' : 'fade--up'
    })
  }

  moveUp(from, to, array) {
    if (array.indexOf(from) > array.indexOf(to)) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div className={`main-bg ${this.backgroundColor()}`} style={this.backgroundImage()}>
        <div className="mainview">
          <Menu links={this.state.links}/>
          <ScrollNav links={this.state.links} activePage={this.props.match.params.title}/>
        <img className="mainview__logo" alt="Logo-dsandberg" src={logo}/>
        <Pagination links={this.state.links} activePage={this.props.match.params.title}/>
        
        <TransitionGroup className="mainview__animation-wrapper">
          <CSSTransition key={this.props.location.key} timeout={700} classNames={this.state.animation} appear={true}>
            <Switch location={this.props.location}>
              <Route path="/hello" component={Hello}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/me" component={Me}/>
              <Route path="/sayhi" component={Sayhi}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <ScrollIcon activePage={this.props.match.params.title}/>
        </div>
      </div>
    )
  }
}