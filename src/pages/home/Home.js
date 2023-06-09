import Header from "../../components/header/Header";
import AnimeItem from '../../components/anime-item/AnimeItem';

import { animeList } from "../../helpers/animeList";
import './style.css'

const Home = () => {
    return ( 
        <div className="home-page">
            <Header />

            <main className="section">
                <div className="container">
                    <h2 className="title-1">Catalogue</h2>
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