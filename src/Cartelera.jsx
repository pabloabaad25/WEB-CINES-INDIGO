import React, { useState } from "react";
import peliculas from "./peliculas"; 
import TarjetaPelicula from "./TarjetaPelicula";

function Cartelera() {
  /* guardar el texto del buscador y género seleccionado */
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("");

  /* para filtrar la película por su título y por el género*/
  const filtradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
    (genero === "" || p.genero.toLowerCase().includes(genero.toLowerCase()))
  );

  return (
    <section className="contenedor-cartelera">
      <h1 className="titulo-seccion">Cartelera</h1>

      {/* FILTROS */}
      <div className="filtros-cartelera" style={{ marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        
        {/* Actualiza el estado de la busqueda cada vez que se escribe algo */}
        <input
          type="text"
          placeholder="Buscar película..."
          className="search-input"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--borde)', background: '#1a1a1a', color: '#fff', flex: '1' }}
          onChange={e => setBusqueda(e.target.value)}
        />

        {/* cada uno de los botones se actualiza el estado de su genero con su valor al hacer clic */}
        <div className="botones-filtro" style={{ display: 'flex', gap: '10px' }}>
          <button className="custom-btn" onClick={() => setGenero("")}>Todas</button>
          <button className="custom-btn" onClick={() => setGenero("Terror")}>Terror</button>
          <button className="custom-btn" onClick={() => setGenero("Acción")}>Acción</button>
          <button className="custom-btn" onClick={() => setGenero("Animación")}>Animación</button>
          <button className="custom-btn" onClick={() => setGenero("Comedia")}>Comedia</button>
        </div>
      </div>

      {/* LISTADO DE PELÍCULAS */}
      <div className="grid-peliculas">
        {filtradas.map(p => (
          <TarjetaPelicula key={p.id} pelicula={p} />
        ))}
      </div>
    </section>
  );
}

export default Cartelera;