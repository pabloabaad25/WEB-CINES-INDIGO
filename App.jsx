import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';

import Inicio from './Inicio';
import { ProximosEstrenos } from './Estrenos';
import Cartelera from './Cartelera';
import Contacto from './Contacto';
// Si no tienes este archivo creado aún, puedes crearlo vacío o comentarlo
// import Promociones from "./Promociones"; 
import PiePagina from './PiePagina';

const Layout = ({ children }) => (
  <div className="main-app">
    {/* BARRA DE NAVEGACIÓN SUPERIOR */}
    <header className="navbar">
      <div className="logo-section">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="logo-text slogan-aura">CINES ÍNDIGO</div>
        </Link>
      </div>
      
      <nav className="header-nav">
        <ul className="nav-menu-horizontal">
          <li><Link to="/" className="nav-link">Inicio</Link></li>
          <li><Link to="/estrenos" className="nav-link">Estrenos 2027</Link></li>
          <li><Link to="/cartelera" className="nav-link">Cartelera</Link></li>
          {/* <li><Link to="/promociones" className="nav-link">Promociones</Link></li> */}
          <li><Link to="/contacto" className="nav-link">Contacto</Link></li>
        </ul>
      </nav>

      <div className="topbar-actions">
        <button className="custom-btn btn-15"><span>LOGIN</span></button>
      </div>
    </header>

    {/* ÁREA DE CONTENIDO DINÁMICO */}
    <main id="content-area">
      {children}
    </main>

    {/* PIE DE PÁGINA */}
    <PiePagina />
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/estrenos" element={<ProximosEstrenos />} />
          <Route path="/cartelera" element={<Cartelera />} />
          {/* <Route path="/promociones" element={<Promociones />} /> */}
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;