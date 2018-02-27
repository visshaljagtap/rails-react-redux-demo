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
                <Link to={`/`} className="logo"><img src="https://cdn-images-1.medium.com/max/1600/1*xkvjbVykgUr8I3nZntymsg.png" /><img src="https://cdn-images-1.medium.com/max/1600/1*BpaqVMW2RjQAg9cFHcX1pw.png" /></Link>
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
