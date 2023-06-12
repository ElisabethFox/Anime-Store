import { useParams } from 'react-router-dom';
import { animeList } from "../../helpers/animeList";

import './style.css';
import BuyButton from '../../components/buttons/BuyButton';
import Tittle1 from '../../components/title-1/Title1';

const Anime = () => {
    const { id } = useParams();
    const anime = animeList.find(({ animeId }) => String(animeId) === id);
    const { title, description, series, year, rating, genre, img, trailer } = anime;

    return (
    <main className="anime-section">
        <div className="container">

            <Tittle1 title={title}/>

            <div className="anime__details">

                <img src={img} alt={title} className="anime__cover" />

                <div className="anime__details-2">

                    <div className="anime__desc">
                        <p>{description}</p>
                        <p className="anime__genre">Genre: {genre}</p>
                    </div>

                    <iframe className="anime__trailer" src={trailer} title="YouTube video player" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    
                    <div className="anime__details-3"> 

                        <div className='anime__info'>
                            <p>Series: {series}</p>
                            <p>Year: {year}</p>
                            <p>IMDb: {rating}</p>
                        </div>

                        <div className='anime-item__buttons'>
                            <BuyButton />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
    );
}
 
export default Anime;