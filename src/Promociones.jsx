import React from 'react';

function Promociones() {

  // ofertas disponibles
  const promocionesCine = [
    {
      id: 1,
      titulo: "GANA ENTRADA DOBLE: THE MANDALORIAN",
      descripcion: "Regístrate en uttopion.es y compite en Football Runner del 11 al 18 de mayo. ¡Si eres el primero, ganas una entrada doble! Este es el camino.",
    },
    {
      id: 2,
      titulo: "MAYORES DE 65 AÑOS - 4€",
      descripcion: "De lunes a jueves, disfruta del cine al mejor precio. (Se requiere documento acreditativo).",
    },
    {
      id: 3,
      titulo: "JUEVES: DÍA DEL ESPECTADOR",
      descripcion: "Todos los jueves (excepto festivos) disfruta de un precio fantástico en todas tus películas.",
    },
    {
      id: 4,
      titulo: "INDIGOS DAYS - 5,50€",
      descripcion: "¡Los miércoles son nuestros! Oferta no acumulable, válida solo para sesiones estándar.",
    },
    {
      id: 5,
      titulo: "BONO CULTURAL JOVEN",
      descripcion: "Usa tu Bono Cultural en nuestra taquilla y vive la mejor experiencia en pantalla grande.",
    }
  ];

  // precios del bar
  const combos = [
    { nombre: "Menú Cine (Palomitas 225g + Refresco 75cl)", precio: "7.50€" },
    { nombre: "Menú Cine Dulce / Mixto (225g + 75cl)", precio: "8.20€" },
    { nombre: "Menú Duo (Palomitas 350g + 2 Bebidas 100cl)", precio: "10.50€" },
    { nombre: "Menú Joven (Palomitas 350g + Refresco 100cl)", precio: "8.90€" },
    { nombre: "Menú Joven Dulce / Mixto (350g + 100cl)", precio: "9.80€" },
  ];

  return (
    <div className="container">
      {/* titulo */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Promociones y Ofertas</h1>
        <p style={{ color: 'var(--texto-gris)' }}>Aprovecha nuestros descuentos exclusivos y disfruta del mejor cine.</p>
      </div>

      {/* tarjetas de promoción */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', marginBottom: '5px' }}>
        {promocionesCine.map(promo => (
          <div key={promo.id} style={{ background: 'var(--fondo-tarjeta)', border: '1px solid var(--borde)', padding: '20px', borderRadius: '4px' }}>
            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '10px' }}>{promo.emoji}</span>
            <h3 style={{ fontSize: '1.1rem', margin: '10px 0', color: '#fff' }}>{promo.titulo}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--texto-gris)' }}>{promo.descripcion}</p>
          </div>
        ))}
      </div>

      {/* menús y precios */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#fff' }}>🍿 SNACK BAR – COMBOS</h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--fondo-tarjeta)', borderRadius: '4px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#333', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>Menú / Producto</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Precio</th>
            </tr>
          </thead>
          <tbody>
            {combos.map((combo, index) => (
              <tr key={index} style={{ borderBottom: '1px solid var(--borde)' }}>
                <td style={{ padding: '12px', color: 'var(--texto-gris)' }}>{combo.nombre}</td>
                <td style={{ padding: '12px', textAlign: 'right', fontWeight: 'bold', color: 'var(--color-principal)' }}>{combo.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Promociones;