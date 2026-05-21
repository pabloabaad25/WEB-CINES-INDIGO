import React from 'react';
import { Ticket, Star, Coffee, Users, Gift, Calendar } from 'lucide-react';

function Promociones() {
  const promocionesCine = [
    {
      id: 1,
      titulo: "GANA ENTRADA DOBLE: THE MANDALORIAN",
      descripcion: "Regístrate en uttopion.es y compite en Football Runner del 11 al 18 de mayo. ¡Si eres el primero, ganas una entrada doble! Este es el camino.",
      icono: <Star className="promo-icon" />,
      clase: "promo-destacada"
    },
    {
      id: 2,
      titulo: "MAYORES DE 65 AÑOS - 4€",
      descripcion: "De lunes a jueves, disfruta del cine al mejor precio. (Se requiere documento acreditativo).",
      icono: <Users className="promo-icon" />,
      clase: "promo-info"
    },
    {
      id: 3,
      titulo: "JUEVES: DÍA DEL ESPECTADOR",
      descripcion: "Todos los jueves (excepto festivos) disfruta de un precio fantástico en todas tus películas.",
      icono: <Calendar className="promo-icon" />,
      clase: "promo-info"
    },
    {
      id: 4,
      titulo: "INDIGOS DAYS - 5,50€",
      descripcion: "¡Los miércoles son nuestros! Oferta no acumulable, válida solo para sesiones estándar.",
      icono: <Ticket className="promo-icon" />,
      clase: "promo-info"
    },
    {
      id: 5,
      titulo: "BONO CULTURAL JOVEN",
      descripcion: "Usa tu Bono Cultural en nuestra taquilla y vive la mejor experiencia en pantalla grande.",
      icono: <Gift className="promo-icon" />,
      clase: "promo-info"
    }
  ];

  const combos = [
    { nombre: "Menú Cine (Palomitas 225g + Refresco 75cl)", precio: "7.50€" },
    { nombre: "Menú Cine Dulce / Mixto (225g + 75cl)", precio: "8.20€" },
    { nombre: "Menú Duo (Palomitas 350g + 2 Bebidas 100cl)", precio: "10.50€" },
    { nombre: "Menú Joven (Palomitas 350g + Refresco 100cl)", precio: "8.90€" },
    { nombre: "Menú Joven Dulce / Mixto (350g + 100cl)", precio: "9.80€" },
  ];

  return (
    <div className="contenedor-promociones">
      <header className="cabecera-promos">
        <h1>PROMOCIONES Y OFERTAS<span>.</span></h1>
        <p>Aprovecha nuestros descuentos exclusivos y disfruta del mejor cine.</p>
      </header>

      <section className="grid-promos">
        {promocionesCine.map(promo => (
          <div key={promo.id} className={`tarjeta-promo ${promo.clase}`}>
            {promo.icono}
            <h3>{promo.titulo}</h3>
            <p>{promo.descripcion}</p>
          </div>
        ))}
      </section>

      <section className="seccion-combos">
        <div className="titulo-combos">
          <Coffee size={32} />
          <h2>SNACK BAR – COMBOS</h2>
        </div>
        <div className="tabla-combos">
          {combos.map((combo, index) => (
            <div key={index} className="fila-combo">
              <span>{combo.nombre}</span>
              <span className="precio-combo">{combo.precio}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Promociones;