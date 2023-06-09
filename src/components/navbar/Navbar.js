import { NavLink } from "react-router-dom";
import './style.css';

import { IoHome, IoInformationCircle, IoCart } from 'react-icons/io5';

const NavBar = () => {
    return ( 
        <nav className="nav">
        <div className="nav__container">
            <div className="nav-row">

                <NavLink to="/" className="logo">
                    Anime Store
                </NavLink>

                <ul className="nav-list">

                    <NavLink to="/" >
                        <li className="nav-list__item">
                                <IoHome size={23} className="home-block__icon"/>
                                <p nav-list__item__desc>Home</p>
                        </li>
                    </NavLink>

                    <NavLink to="/info">
                        <li className="nav-list__item">
                                <IoInformationCircle size={23} className="info-block__icon"/>
                                <p nav-list__item__desc>Info</p>
                        </li>
                    </NavLink>

                    <NavLink to="/cart">
                        <li className="nav-list__item">
                                <IoCart size={23} className="home-block__icon"/>
                                <p nav-list__item__desc>Cart</p>
                        </li>
                    </NavLink>

                        <li className="nav-list__total__price">
                                <p>0$</p>
                        </li>
                </ul>
            </div>
        </div>
    </nav>
     );
}
 
export default NavBar;