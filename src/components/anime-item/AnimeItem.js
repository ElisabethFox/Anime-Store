import './style.css';

const AnimeItem = ({ anime }) => {
  console.log(anime);
  return (
    <div className="anime-item">
      <img src={anime.img} alt={anime.title} className='anime-item__img' />
      <div className='anime-item__details'>
        
          <h3 className='anime-item__title'>{anime.title}</h3>

          <p className='anime-item__series'>Series: {anime.series} </p>
          <p className='anime-item__series'>Year: {anime.year} </p>

          <div className='game-item__buttons'>
            <button className='game-item__btn__more'>More</button>
            <button className='game-buy'>Buy</button>
          </div>
        
      </div>
    </div>
  );
}
 
export default AnimeItem;