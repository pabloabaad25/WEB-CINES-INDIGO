import React, { useState } from "react";
import { listaPeliculas } from "./peliculas"; // Arreglada la importación exacta
import TarjetaPelicula from "./TarjetaPelicula";

function Cartelera() {
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("");

  const filtradas = listaPeliculas.filter(p =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()) &&
    (genero === "" || p.genero === genero)
  );

  return (
    <section className="contenedor-cartelera">
      <h1 className="titulo-seccion">Cartelera</h1>

      <div className="filtros-cartelera" style={{ marginBottom: '20px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Buscar película..."
          className="search-input"
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--border)', background: '#111', color: '#fff', flex: '1' }}
          onChange={e => setBusqueda(e.target.value)}
        />

        <div className="botones-filtro" style={{ display: 'flex', gap: '10px' }}>
          <button className="custom-btn btn-3" onClick={() => setGenero("")}><span>Todas</span></button>
          <button className="custom-btn btn-3" onClick={() => setGenero("Terror")}><span>Terror</span></button>
          <button className="custom-btn btn-3" onClick={() => setGenero("Acción")}><span>Acción</span></button>
          <button className="custom-btn btn-3" onClick={() => setGenero("Animación")}><span>Animación</span></button>
        </div>
      </div>

      <div className="grid-peliculas">
        {filtradas.map(p => (
          <TarjetaPelicula key={p.id} pelicula={p} />
        ))}
      </div>
    </section>
  );
}

export default Cartelera;