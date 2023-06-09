import './styles/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Info from './pages/info/Info';
import Anime from './pages/anime/Anime';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/info' element={<Info />} />
                    <Route path='/anime/:id' element={<Anime />} /> 
                </Routes>
            <Footer />
        </Router>
    </div>  
  );
};

export default App;

