import React from 'react';

// lista de peliculas y info.
const peliculas = [
  {
    titulo: "ICE AGE: PUNTO DE EBULLICIÓN",
    subtitulo: "Una aventura salvaje entre dinosaurios y lava",
    estreno: "5 de febrero de 2027",
    genero: "Aventuras y comedia",
    descripcion: "Manny, Sid, Diego, Ellie, Scrat y la manada exploran regiones inexploradas del peligroso mundo perdido."
  },
  {
    titulo: "SONIC 4: LA PELÍCULA",
    subtitulo: "El rayo azul contra Metal Sonic",
    estreno: "19 de marzo de 2027",
    genero: "Animación, Aventura, Ciencia ficción",
    descripcion: "Dirigida por Jeff Fowler, presenta a Kristen Bell como Amy Rose. Con Ben Schwartz, Keanu Reeves e Idris Elba."
  },
  {
    titulo: "STAR WARS: CAZA ESTELAR",
    subtitulo: "El futuro de la Fuerza está en juego",
    estreno: "28 de mayo de 2027",
    genero: "Space opera",
    descripcion: "En una galaxia en reconstrucción, un piloto solitario se ve envuelto en una misión vital ante nuevas amenazas."
  },
  {
    titulo: "SPIDER-MAN: MÁS ALLÁ DEL SPIDER-VERSE",
    subtitulo: "Cierre de la trilogía animada",
    estreno: "18 de junio de 2027",
    genero: "Animación, Acción",
    descripcion: "Miles Morales y su equipo enfrentan la amenaza definitiva de La Mancha para salvar el multiverso."
  },
  {
    titulo: "BATMAN: PARTE II",
    subtitulo: "Justicia en una Gotham inundada",
    estreno: "1 de octubre de 2027",
    genero: "Drama, Cine Negro, Acción",
    descripcion: "Robert Pattinson regresa como el Caballero Oscuro. Incorporaciones de Scarlett Johansson y Sebastian Stan."
  }
];

// flecha para ensenñar los estrenos
export const ProximosEstrenos = () => {
  return (
    <section className="contenedor-promociones">
      {/* título y descripción de la pagina */}
      <h1 className="titulo-seccion">Próximos Estrenos 2027</h1>
      
      <p style={{ color: 'var(--texto-secundario)', marginBottom: '30px', fontSize: '0.95rem' }}>
        Avance de las películas que llegarán próximamente a nuestras salas.
      </p>
      
      {/* distribuye las peliculas en formato de tabla */}
      <div className="grid-peliculas">
        {peliculas.map((cine, index) => (
          <div key={index} className="pelicula-card">
            <div>
              {/* fecha del estreno */}
              <span className="counter">{cine.estreno}</span>
              
              <h3 style={{ marginTop: '15px', color: '#fff', fontSize: '1.2rem' }}>{cine.titulo}</h3>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--acento)', fontWeight: 'bold', marginTop: '5px' }}>
                {cine.genero}
              </p>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--texto-secundario)', margin: '15px 0' }}>
                {cine.descripcion}
              </p>
            </div>
            <button className="custom-btn" style={{ width: '100%' }}>Ver Tráiler</button>
          </div>
        ))}
      </div>
    </section>
  );
};