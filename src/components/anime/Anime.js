import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, series, year, index }) => {
    return (
        <NavLink to={`/anime/${index}`}>
            <li className="anime">
                    <img src={img} alt={title} className="anime__img" />
                    <p>{series}</p>
                    <p>{year}</p>
                    <h3 className="anime__title">{title}</h3>
            </li>
        </NavLink>
    );
}
 
export default Project;