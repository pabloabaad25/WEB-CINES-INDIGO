import React from 'react';
import { Ticket, Sparkles, Flame } from 'lucide-react';

function Inicio({ setVista }) {
  return (
    <section style={{
      textAlign: 'center',
      padding: '100px 20px',
      background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 60%, #000000 100%)',
      borderRadius: '24px',
      border: '1px solid #222',
      marginTop: '20px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.7)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '300px',
        background: 'rgba(229, 9, 20, 0.15)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      {/* Título */}
      <h1 style={{
        fontSize: '4.2rem', 
        marginBottom: '15px',
        fontWeight: '700', 
        fontFamily: "'Syncopate', 'Space Grotesk', sans-serif", 
        letterSpacing: '6px', 
        lineHeight: '1.2',
        background: 'linear-gradient(to right, #ffffff, #888888)',  
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        margin: '0 0 20px 0',
        textAlign: 'center'
      }}>
        CINES ÍNDIGO
      </h1>

      {/* Eslogan */}
      <p style={{
        color: '#e0e0e0',
        fontSize: '1.2rem',
        fontFamily: "'Orbitron', 'Courier New', monospace",
        letterSpacing: '2px',
        textShadow: '0 0 8px rgba(229, 9, 20, 0.3)',
        maxWidth: '650px',
        margin: '0 auto 40px auto',
        fontWeight: '400',
        lineHeight: '1.7',
        textAlign: 'center'
      }}>
        Sonido envolvente, proyección láser de última generación y las butacas más cómodas esperando por ti.
      </p>

      {/* Botón Principal */}
      <button
        className="date-btn active"
        style={{
          margin: '0 auto',
          padding: '18px 45px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          boxShadow: '0 8px 25px rgba(229, 9, 20, 0.4)',
          transition: 'transform 0.2s, boxShadow 0.2s',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px'
        }}
        onClick={() => { if (setVista) setVista('sesiones'); }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(229, 9, 20, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(229, 9, 20, 0.4)';
        }}
      >
        <Ticket size={20} /> VER CARTELERA Y HORARIOS
      </button>

      {/* Banner */}
      <div style={{ marginTop: '50px' }}>
        <div style={{
          background: 'linear-gradient(90deg, #ffb703 0%, #ff9f1c 100%)',
          color: '#000',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 25px',
          borderRadius: '100px',
          fontWeight: '800',
          fontSize: '0.95rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 10px 20px rgba(255, 183, 3, 0.2)'
        }}>
          <Flame size={18} fill="#000" /> ¡PROMOCIÓN FIESTA DEL CINE! Miércoles a 5€
        </div>
      </div>
    </section>
  );
}

export default Inicio;