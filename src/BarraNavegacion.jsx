import React from 'react'; // importar libreria de react

function BarraNavegacion() { 
  const estiloBoton = {
    fontFamily: "'Space Grotesk', 'Rajdhani', sans-serif", 
    letterSpacing: '1px', 
    textTransform: 'uppercase', 
    fontSize: '0.85rem'
  };

  return (
    // contenedor con los estilos 
    <nav className="navbar" style={{ justifyContent: 'center', gap: '10px' }}> 
      
      <button className="custom-btn" style={estiloBoton}>Cartelera</button>
      <button className="custom-btn" style={estiloBoton}>Películas</button>
      <button className="custom-btn" style={estiloBoton}>Entradas</button>
      <button className="custom-btn" style={estiloBoton}>Contacto</button>
      <button className="custom-btn" style={estiloBoton}>Promociones</button>

    </nav>
  );
}

export default BarraNavegacion;