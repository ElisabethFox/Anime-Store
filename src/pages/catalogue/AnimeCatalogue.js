import { useParams } from "react-router-dom";
import { animeList } from "../../helpers/animeList";

const AnimeCatalogue = () => {

    return ( 
        <main className="section">
                <div className="container">
                    <h2 className="title-1">Anime Catalogue</h2>
                    <ul className="catalogue">
                        {animeList.map(({ title, AnimeId, series, year, img }) => {
                            return <Anime key={AnimeId} title={title} img={img} index={AnimeId}/>
                        })}
                    </ul>
                </div>
        </main>
    )
};
 
export default AnimeCatalogue;