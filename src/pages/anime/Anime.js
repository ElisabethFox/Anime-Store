import { useParams } from 'react-router-dom';
import { animeList } from "../../helpers/animeList";

const Anime = () => {
    const { id } = useParams();
    const anime = animeList.find(({ animeId }) => String(animeId) === id);
    const { title, description, series, year, imgBig } = anime;

    return (
    <main className="section">
        <div className="container">

            <div className="anime-details">

                <h1 className="title-1">{title}</h1>
                <img src={imgBig} alt={title} className="project-details__cover" />

                <div className="project-details__desc">
                    <p>{description}</p>

                </div>

            </div>
        </div>
    </main>
    );
}
 
export default Anime;