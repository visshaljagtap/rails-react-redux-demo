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
            <div class="navigation">
                <Link to={`/`} className="logo"><img src='rails-react-redux.    png' /></Link>
                <input class="button" type="checkbox" id="button" />
                <label class="icon" for="button"><span class="navicon"></span></label>
                <ul class="menu">
                    <li><Link to={`/`} >Home</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
