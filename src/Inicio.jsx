import React from 'react';

function Inicio() {
  return (
    <section style={{ 
      textAlign: 'center', 
      padding: '60px 20px', 
      background: '#1a1a1a', 
      borderRadius: '8px',
      border: '1px solid var(--borde)',
      marginTop: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 'bold' }}>Cines Índigo</h1>
      
      {/* CORREGIDO: 'var(--texto-gris)' ahora va entre comillas */}
      <p style={{ color: 'var(--texto-gris)', marginBottom: '30px' }}>Vive la mejor experiencia de cine</p>

      {/* Boton principal usando los estilos del index.css */}
      <button className="custom-btn" style={{ margin: '0 auto' }}>
        Comprar Entradas
      </button>

      {/* Bloque de promocion simple */}
      <div style={{ marginTop: '40px' }}>
        <p style={{ 
          background: '#ffb703', 
          color: '#000', 
          display: 'inline-block', 
          padding: '8px 15px', 
          borderRadius: '4px',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>
          Miércoles al cine: 5€
        </p>
      </div>
    </section>
  );
}

export default Inicio;