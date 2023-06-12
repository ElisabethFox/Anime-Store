import { NavLink } from 'react-router-dom';
import './style.css';

const MoreButton = ({ id }) => {
    return ( 
        <NavLink to={`/anime/${id}`}>
            <button className='btn'>More</button>
        </NavLink> 
    );
}
 
export default MoreButton;