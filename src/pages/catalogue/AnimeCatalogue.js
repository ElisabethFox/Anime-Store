import Anime from './../../components/anime/Anime'
import { animeList } from "../../helpers/animeList";

const AnimeCatalogue = () => {

    return ( 
        <main className="section">
                <div className="container">
                    <h2 className="title-1">Anime Catalogue</h2>
                    <ul className="catalogue">
                        {animeList.map(({ title, img, series, year, animeId }) => {
                            return <Anime key={animeId} title={title} img={img} index={animeId}/>
                        })}
                    </ul>
                </div>
        </main>
    )
};
 
export default AnimeCatalogue;