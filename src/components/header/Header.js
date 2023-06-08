import './style.css';

import header from './header.jpg';
import logo from './logo.png'

const Header = () => {
    return ( 
        <div className="header">
            <div className="header_wrapper">
            <img src={header} className="header-img" alt="link" />
                <div className="header-top">
                <img src={logo} className="header-logo" alt="link" />
                </div>
            </div>
        </div>
    );
}
 
export default Header;