import React from 'react';

function TarjetaPelicula({ pelicula }) {
  return (
    <div className="tarjeta-pelicula">
      <img 
        src={pelicula.imagen} 
        alt={pelicula.titulo} 
        className="poster-cine" 
      />
      
      <div className="info-tarjeta">
        <span className="genero-peli">{pelicula.genero}</span>
        <h3 className="titulo-peli" style={{ color: '#fff', margin: '10px 0' }}>{pelicula.titulo}</h3>
        <p className="duracion-peli" style={{ color: 'var(--texto-secundario)', marginBottom: '15px' }}>{pelicula.duracion}</p>
        
        <a 
          href={pelicula.trailer} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="custom-btn btn-15"
          style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}
        >
          <span>VER TRÁILER</span>
        </a>
      </div>
    </div>
  );
}

export default TarjetaPelicula;