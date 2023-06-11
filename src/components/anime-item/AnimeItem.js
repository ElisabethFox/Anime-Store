import './style.css';

const AnimeItem = ({ anime }) => {
  return (
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
            <button className='anime-item__btn'>More</button>
            <button className='anime-item__btn'>Buy</button>
          </div>
        </div>
      </div>
    </li>
  );
}
 
export default AnimeItem;