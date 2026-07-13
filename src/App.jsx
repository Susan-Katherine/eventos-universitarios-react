import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Eventos from './pages/Eventos.jsx';
import Participantes from './pages/Participantes.jsx';
import ApiEventos from './pages/ApiEventos.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/participantes" element={<Participantes />} />
          <Route path="/api-eventos" element={<ApiEventos />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;