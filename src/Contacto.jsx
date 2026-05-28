import React, { useState } from 'react';
// libreria de iconos lucide-react
import { Mail, Clock, MapPin, Send, MessageSquare } from 'lucide-react';

function Contacto() {
  // controlar si el formulario se ha enviado
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // para no recargar la pagina
    setEnviado(true);   // mensjae de exito

    // borra el mensaje en 4 segundos
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <section className="cartelera-container" style={{ padding: '40px 5%' }}>

      {/* Cabecera de la sección */}
      <div style={{ marginBottom: '40px' }}>
        <h1 className="section-title" style={{ margin: '0 0 10px 0' }}>Contacto</h1>
        <p style={{ color: '#b3b3b3', margin: 0 }}>
          Tienes alguna duda o sugerencia? Escribe a nuestro equipo y te responderá lo antes posible!!!!!
        </p>
      </div>

      {/* Información y Formulario */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '50px',
        alignItems: 'start'
      }}>

        {/* datos contacto cine */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Horario */}
          <div style={{ background: '#111', padding: '25px', borderRadius: '16px', border: '1px solid #222', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ background: 'rgba(229, 9, 20, 0.1)', padding: '15px', borderRadius: '12px', color: '#e50914' }}>
              <Clock size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.1rem' }}>Horario de Atención</h4>
              <p style={{ margin: 0, color: '#b3b3b3', fontSize: '0.9rem' }}>Lunes a Domingo: 10:00 - 23:00</p>
            </div>
          </div>

          {/* Email */}
          <div style={{ background: '#111', padding: '25px', borderRadius: '16px', border: '1px solid #222', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ background: 'rgba(229, 9, 20, 0.1)', padding: '15px', borderRadius: '12px', color: '#e50914' }}>
              <Mail size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.1rem' }}>Correo Electrónico</h4>
              <p style={{ margin: 0, color: '#b3b3b3', fontSize: '0.9rem' }}>contacto@cinesindigo.com</p>
            </div>
          </div>

          {/* Dirección del cine */}
          <div style={{ background: '#111', padding: '25px', borderRadius: '16px', border: '1px solid #222', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ background: 'rgba(229, 9, 20, 0.1)', padding: '15px', borderRadius: '12px', color: '#e50914' }}>
              <MapPin size={24} />
            </div>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.1rem' }}>Oficinas Centrales</h4>
              <p style={{ margin: 0, color: '#b3b3b3', fontSize: '0.9rem' }}>Carrer de Barcelona, 45, 17001 Girona</p>
            </div>
          </div>

        </div>

        {/* Formulario contacto */}
        <div style={{
          background: 'linear-gradient(145deg, #161616, #0f0f0f)',
          padding: '35px',
          borderRadius: '20px',
          border: '1px solid #232323',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          <h3 style={{ margin: '0 0 25px 0', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MessageSquare size={20} color="#e50914" /> Envíanos un mensaje
          </h3>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* nombre cliente */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>Nombre Completo</label>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #333', background: '#1a1a1a', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = '#e50914'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>

            {/* correo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>Correo Electrónico</label>
              <input
                type="email"
                required
                placeholder="ejemplo@correo.com"
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #333', background: '#1a1a1a', color: '#fff', fontSize: '0.95rem', outline: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = '#e50914'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              />
            </div>

            {/*  Mensaje del cliente */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '600' }}>Mensaje</label>
              <textarea
                required
                placeholder="Escribe aquí tu consulta..."
                rows="4"
                style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #333', background: '#1a1a1a', color: '#fff', fontSize: '0.95rem', resize: 'none', outline: 'none', transition: 'border-color 0.3s' }}
                onFocus={(e) => e.target.style.borderColor = '#e50914'}
                onBlur={(e) => e.target.style.borderColor = '#333'}
              ></textarea>
            </div>

            {/* Botón para enviar */}
            <button
              type="submit"
              className="date-btn active"
              style={{ padding: '14px', fontSize: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer', marginTop: '10px' }}
            >
              <Send size={16} /> Enviar Mensaje
            </button>

            {/* Mensaje de alerta */}
            {enviado && (
              <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', borderRadius: '8px', textAlign: 'center', fontSize: '0.9rem', fontWeight: '600', border: '1px solid rgba(46, 204, 113, 0.3)' }}>
                Mensaje enviado! Te responderemos pronto
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contacto;