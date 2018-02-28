import { Link } from 'react-router-dom'
import React, { Component } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
        console.log('---------In Constructor===========')
        console.log(this.props);
    }
    render() {
        return (
            <div className="navigation">
                <Link to={`/`} className="logo" replace><img src='rails-react-redux.png' /></Link>
                <input className="button" type="checkbox" id="button" />
                <label className="icon" htmlFor="button"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to={`/`} replace>Home</Link></li>
                    <li><Link to={`/contact`} replace>Contact</Link></li>
                    <li><Link to={`/about`} replace>About</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
