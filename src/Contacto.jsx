import React from 'react';

function Contacto() {
  return (
    <section className="contenedor-promociones">
      <h1 className="titulo-seccion">Contacto</h1>

      {/* Formulario de contacto basico */}
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Nombre" 
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid var(--borde)', background: 'var(--fondo-tarjeta)', color: '#fff' }} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid var(--borde)', background: 'var(--fondo-tarjeta)', color: '#fff' }} 
        />
        <textarea 
          placeholder="Mensaje" 
          rows="5"
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid var(--borde)', background: 'var(--fondo-tarjeta)', color: '#fff', resize: 'none' }}
        ></textarea>

        <button type="submit" className="custom-btn">Enviar Mensaje</button>
      </form>

      {/* Datos de interes */}
      <div style={{ marginTop: '30px', color: 'var(--texto-secundario)', fontSize: '0.95rem' }}>
        <p style={{ marginBottom: '5px' }}><strong>Horario:</strong> 10:00 - 23:00</p>
        <p><strong>Email:</strong> contacto@indigo.com</p>
      </div>
    </section>
  );
}

export default Contacto;