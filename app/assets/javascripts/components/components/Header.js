import {Link} from 'react-router-dom'

const Header = () => (
    <div className="header">
        <Link to={`/`} className="logo"><img src="https://cdn-images-1.medium.com/max/1600/1*xkvjbVykgUr8I3nZntymsg.png"/></Link>
        <div className="header-right">
            <Link to={`/`}>Home</Link>
            <Link to={`/contact`}>Contact</Link>
            <Link to={`/about`}>About</Link>
        </div>
    </div>
);

export default Header;
