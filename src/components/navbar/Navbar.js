import { NavLink } from "react-router-dom";
import './style.css';

import home from './icons/home.svg';
import info from './icons/info.svg';
import basket from './icons/basket.svg'

const NavBar = () => {
    return ( 
        <nav className="nav">
        <div className="container">
            <div className="nav-row">

                <NavLink to="/" className="logo">
                    Anime Store
                </NavLink>

                <ul className="nav-list">

                    <li className="nav-list__item">
                        <NavLink to="/" className={home}>
                            <img src={home} />
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/" className={info}>
                            <img src={info} />
                        </NavLink>
                    </li>

                    <li className="nav-list__item">
                        <NavLink to="/" className={basket}>
                            <img src={basket} />
                        </NavLink>
                    </li>
 
                </ul>
            </div>
        </div>
    </nav>
     );
}
 
export default NavBar;