import AnimeItem from '../../components/anime-item/AnimeItem'
import { animeList } from "../../helpers/animeList";

const AnimeCatalogue = () => {

    return ( 
        <main className="section">
                <div className="container">
                    <h2 className="title-1">Anime Catalogue</h2>
                    <ul className="catalogue">
                        {animeList.map((anime) => {
                            return <AnimeItem key={anime.animeId} anime={anime} />
                        })}
                    </ul>
                </div>
        </main>
    )
};
 
export default AnimeCatalogue;