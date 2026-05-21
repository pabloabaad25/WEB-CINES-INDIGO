import React from 'react';

function TarjetaPelicula({ pelicula }) {
  return (
    <div className="tarjeta-pelicula">
      {/* Poster */}
      <img src={pelicula.poster} alt={pelicula.titulo} className="poster-cine" />
      
      {/* Informacion de la pelicula */}
      <div style={{ marginTop: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--texto-gris)' }}>
          <span>{pelicula.genero}</span>
          <span>Edad: {pelicula.calificacion}</span>
        </div>

        <h3 style={{ color: '#fff', margin: '10px 0 5px 0', fontSize: '1.2rem' }}>{pelicula.titulo}</h3>
        <p style={{ color: 'var(--color-principal)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Duración: {pelicula.duracion}
        </p>
        
        <p style={{ fontSize: '0.85rem', color: 'var(--texto-gris)', marginBottom: '15px' }}>
          {pelicula.sinopsis}
        </p>

        {/* Listado simple de los horarios o dias */}
        <div style={{ marginBottom: '15px' }}>
          <strong style={{ fontSize: '0.8rem', color: '#fff', display: 'block', marginBottom: '5px' }}>Sesiones / Días:</strong>
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
            {pelicula.horarios.map((h, index) => (
              <span key={index} style={{ background: '#333', padding: '2px 6px', borderRadius: '3px', fontSize: '0.75rem', color: '#fff' }}>
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Boton al trailer */}
      <a 
        href={pelicula.trailer} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="custom-btn"
        style={{ textDecoration: 'none', display: 'block', textAlign: 'center', width: '100%', marginTop: '10px' }}
      >
        VER TRÁILER
      </a>
    </div>
  );
}

export default TarjetaPelicula;