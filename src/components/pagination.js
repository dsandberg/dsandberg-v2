// react
import React, { Component } from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import { NavLink } from 'react-router-dom';

// CSS
import './pagination.css';


export default class Pagination extends Component {

  mapDots() {
    return this.props.links.map((link, i) => {
      return (
          <NavLink 
              key={i}
              className='pagination__dots__dot'
              to={"/" + link}
              activeClassName="pagination__dots__dot--active"
              onClick={
                  this.handelLinkClick.bind(this)
                }>
          </NavLink>
      );
    });
  }

  pageNumber() {
    return "0" + (this.props.links.indexOf(this.props.activePage) + 1);
  }

  handelLinkClick(event) {
    if (event.target.classList.contains('pagination__dots__dot--active')) {
      event.preventDefault()
    }
  }

  render() {
    return (
      <div className={'pagination'}>
        <h2 className="pagination__page-num">{this.pageNumber()}</h2>
        <h3 className="pagination__max-page-num">{`/${this.props.links.length}`}</h3>
        <h3 className="pagination__active-page">{this.props.activePage}</h3>
        <div className="pagination__dots">
            {this.mapDots()}
        </div>
      </div>
    );
  }
};