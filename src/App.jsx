// LIBRERIAS
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// IMPORTACIONES DE LAS PAGINAS
import Inicio from './Inicio';
import { ProximosEstrenos } from './Estrenos';
import Cartelera from './Cartelera';
import Contacto from './Contacto';
import PiePagina from './PiePagina';

// ESTRUCTURA DEL HEADER Y FOOTER
const Layout = ({ children }) => (
  <div className="main-app">
    {/* MENU DE NAVEGACION */}
    <header className="navbar">
      <div className="logo-section">
        {/* Enlace con logo para volver al inicio */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-text">CINES ÍNDIGO</div>
        </Link>
      </div>
      
      <nav className="header-nav">
        <ul className="nav-menu-horizontal">
          {/* Enlaces internos con etiqueta de Link de react-router-dom */}
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/estrenos" className="nav-link">Estrenos 2027</Link></li>
          <li><Link to="/cartelera" className="nav-link">Cartelera</Link></li>
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
        </ul>
      </nav>

    </header>

    {/* CONTENIDO DE CADA PAGINA */}
    <main id="content-area">
      {children}
    </main>

    {/* PIE DE PAGINA */}
    <PiePagina />
  </div>
);

/* Componente principal*/
function App() {
  return (
    <Router>
      <Layout>
        {/* Definición de rutas de cada componente */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estrenos" element={<ProximosEstrenos />} />
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;