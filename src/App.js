import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PreguntasFrecuentesPage from './pages/PreguntasFrecuentesPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';
import RegionCuyanaPage from './pages/RegionCuyanaPage';
import PatagoniaPage from './pages/PatagoniaPage';






function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="preguntas" element={ <PreguntasFrecuentesPage />} />
      <Route path="contacto" element={ <ContactoPage />} />
      <Route path="patagonia" element={ <PatagoniaPage />} />
      <Route path="cuyo" element={ <RegionCuyanaPage />} />
      <Route path="novedades" element={ <NovedadesPage />} />
      </Routes>
      
      
      </BrowserRouter>


      
      <Footer></Footer>
      
    </div>
  );
}

export default App;
