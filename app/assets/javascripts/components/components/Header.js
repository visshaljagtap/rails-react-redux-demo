import { Link } from 'react-router-dom'
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to={`/`} className="logo"><img src='rails-react-redux.png' /></Link>
                <input className="button" type="checkbox" id="button" />
                <label className="icon" htmlFor="button"><span className="navicon"></span></label>
                <ul className="menu">
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/gallery`}>Gallery</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
