import { NavLink } from 'react-router-dom';
import BuyButton from '../buttons/BuyButton';
import MoreButton from '../buttons/MoreButton';
import './style.css';

const AnimeItem = ({ anime }) => {
  return (
    <NavLink to={`/anime/${anime.animeId}`}>
        <li className="anime-item">
          <img src={anime.img} alt={anime.title} className='anime-item__img' />
          <div className='anime-item__details'>

            <h3 className='anime-item__title'>{anime.title}</h3>

            <div className='anime__info-container'>
              <div className='anime-item__description'>
                <p className='anime-item__series'>Series: {anime.series} </p>
                <p className='anime-item__year'>Year: {anime.year} </p>
                <p className='anime-item__price'>Price: {anime.price} </p>
              </div>

              <div className='anime-item__buttons'>
                <MoreButton id={anime.animeId}/>
                <BuyButton />
              </div>
            </div>
          </div>
        </li>
    </NavLink>
  );
}
 
export default AnimeItem;