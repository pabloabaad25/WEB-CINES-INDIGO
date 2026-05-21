import React, { useState } from "react";
import peliculas from "./peliculas"; 
import TarjetaPelicula from "./TarjetaPelicula";

function Cartelera() {
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("");

  const filtradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
    (genero === "" || p.genero.toLowerCase().includes(genero.toLowerCase()))
  );

  return (
    <section className="contenedor-cartelera">
      <h1 className="titulo-seccion">Cartelera</h1>

      {/* Bloque de filtros */}
      <div className="filtros-cartelera" style={{ marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar película..."
          className="search-input"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--borde)', background: '#1a1a1a', color: '#fff', flex: '1' }}
          onChange={e => setBusqueda(e.target.value)}
        />

        <div className="botones-filtro" style={{ display: 'flex', gap: '10px' }}>
          <button className="custom-btn" onClick={() => setGenero("")}>Todas</button>
          <button className="custom-btn" onClick={() => setGenero("Terror")}>Terror</button>
          <button className="custom-btn" onClick={() => setGenero("Acción")}>Acción</button>
          <button className="custom-btn" onClick={() => setGenero("Animación")}>Animación</button>
          <button className="custom-btn" onClick={() => setGenero("Comedia")}>Comedia</button>
        </div>
      </div>

      {/* Listado de peliculas */}
      <div className="grid-peliculas">
        {filtradas.map(p => (
          <TarjetaPelicula key={p.id} pelicula={p} />
        ))}
      </div>
    </section>
  );
}

export default Cartelera;