import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class ScrollNav extends Component {
    constructor(props) {
        super(props)
        this.handelScroll = this.handelScroll.bind(this)
    }

    state = {
        from: this.props.activePage,
        to: this.props.activePage
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            from: newProps.activePage,
            to: newProps.activePage
        })
    }
    
    componentWillMount() {
        if (!this.mediaQuery()) {
            document.addEventListener("mousewheel", this.handelScroll);
            document.addEventListener("DOMMouseScroll", this.handelScroll);
        }
    }

    mediaQuery() {
        const mq = window.matchMedia( "(max-width: 600px)" );
        return mq.matches
      }

    handelScroll = (event) => {
        document.removeEventListener("mousewheel", this.handelScroll);
        document.removeEventListener("DOMMouseScroll", this.handelScroll);

        setTimeout( () => {
            document.addEventListener("mousewheel", this.handelScroll);
            document.addEventListener("DOMMouseScroll", this.handelScroll);
        }, 1200)

        const array = this.props.links

        if (event.deltaY < 0) {
            const toNum = array.indexOf(this.state.from) - 1;
            this.setState({to: (toNum < 0) ? array[0] : array[toNum]})
        } else if (event.deltaY > 0) {
            const toNum = array.indexOf(this.state.from) + 1;
            this.setState({to: (toNum > array.length-1) ? array[array.length-1] : array[toNum]})
        }
    }

    render() {
        if (this.state.from !== this.state.to) {
            return <Redirect to={this.state.to}/>
        }
        return null

    }
}