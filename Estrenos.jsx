import React from 'react';
import './App.css'; 

const peliculas = [
  {
    titulo: "ICE AGE: PUNTO DE EBULLICIÓN",
    subtitulo: "Una aventura salvaje entre dinosaurios y lava",
    estreno: "5 de febrero de 2027",
    genero: "Aventuras y comedia",
    descripcion: "Manny, Sid, Diego, Ellie, Scrat y la manada exploran regiones inexploradas del peligroso mundo perdido.",
    color: "#ff4500"
  },
  {
    titulo: "SONIC 4: LA PELÍCULA",
    subtitulo: "El rayo azul contra Metal Sonic",
    estreno: "19 de marzo de 2027",
    genero: "Animación, Aventura, Ciencia ficción",
    descripcion: "Dirigida por Jeff Fowler, presenta a Kristen Bell como Amy Rose. Con Ben Schwartz, Keanu Reeves e Idris Elba.",
    color: "#00acee"
  },
  {
    titulo: "STAR WARS: CAZA ESTELAR",
    subtitulo: "El futuro de la Fuerza está en juego",
    estreno: "28 de mayo de 2027",
    genero: "Space opera",
    descripcion: "En una galaxia en reconstrucción, un piloto solitario se ve envuelto en una misión vital ante nuevas amenazas.",
    color: "#ffe81f"
  },
  {
    titulo: "SPIDER-MAN: MÁS ALLÁ DEL SPIDER-VERSE",
    subtitulo: "Cierre de la trilogía animada",
    estreno: "18 de junio de 2027",
    genero: "Animación, Acción",
    descripcion: "Miles Morales y su equipo enfrentan la amenaza definitiva de La Mancha para salvar el multiverso.",
    color: "#e50914"
  },
  {
    titulo: "BATMAN: PARTE II",
    subtitulo: "Justicia en una Gotham inundada",
    estreno: "1 de octubre de 2027",
    genero: "Drama, Cine Negro, Acción",
    descripcion: "Robert Pattinson regresa como el Caballero Oscuro. Incorporaciones de Scarlett Johansson y Sebastian Stan.",
    color: "#b621fe"
  }
];

export const ProximosEstrenos = () => {
  return (
    <section id="center">
      <div className="container">
        <h2 className="slogan-aura" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          PRÓXIMOS ESTRENOS 2027
        </h2>
        <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '50px' }}>
          Vive la Magia, Siente el Aura. El adelanto de lo que hará vibrar nuestras pantallas.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {peliculas.map((cine, index) => (
            <div key={index} className="pelicula-card">
              <span className="counter" style={{ borderColor: cine.color }}>{cine.estreno}</span>
              <h3 style={{ marginTop: '15px', color: '#fff' }}>{cine.titulo}</h3>
              <p style={{ fontSize: '0.8rem', color: cine.color, fontWeight: 'bold' }}>{cine.genero}</p>
              <p style={{ fontSize: '0.9rem', color: '#aaa', margin: '15px 0' }}>{cine.descripcion}</p>
              <button className="custom-btn btn-15"><span>Ver Tráiler</span></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};