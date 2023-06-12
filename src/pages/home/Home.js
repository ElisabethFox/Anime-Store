import Header from "../../components/header/Header";
import AnimeItem from '../../components/anime-item/AnimeItem';

import { animeList } from "../../helpers/animeList";
import Tittle1 from "../../components/title-1/Title1";

const Home = () => {
    return ( 
        <div className="home-page">
            <Header />

            <main className="section">
                <div className="container">
                    <Tittle1 title="Catalogue"/>
                    <ul className="catalogue">
                        {animeList.map((anime) => {
                            return <AnimeItem key={anime.animeId} anime={anime} />
                        })}
                    </ul>
                </div>
        </main>

        </div>
    );
};

export default Home;