const peliculas = [
  {
    id: 1,
    titulo: "La Momia de Lee Cronin",
    sinopsis:
      "La joven hija de un periodista desaparece en el desierto. Años después regresa... pero algo no está bien.",
    poster: "/img/la_momia.jpg",
    genero: "Terror",
    duracion: "134'",
    calificacion: "18",
    director: "Lee Cronin",
    horarios: ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves"],
    trailer: "https://www.youtube.com/watch?v=CqnQ4s-L9Mg",
  },
  {
    id: 2,
    titulo: "Michael",
    sinopsis:
      "La historia de Michael Jackson, desde sus inicios en los Jackson 5 hasta convertirse en una leyenda mundial.",
    poster: "/img/michael.jpg",
    genero: "Musical / Biopic",
    duracion: "127'",
    calificacion: "12",
    director: "Antoine Fuqua",
    horarios: ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves"],
    trailer: "https://www.youtube.com/watch?v=o1HQSh6zZ8s",
  },
  {
    id: 3,
    titulo: "Mortal Kombat II",
    sinopsis:
      "Nueva batalla brutal contra Shao Kahn, donde los campeones de la Tierra deben luchar por la supervivencia del mundo.",
    poster: "/img/mortal_kombat.jpg",
    genero: "Acción / Artes marciales",
    duracion: "116'",
    calificacion: "16",
    director: "Simon McQuoid",
    horarios: ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves"],
    trailer: "https://www.youtube.com/watch?v=nUfwLpIiWCU",
  },
  {
    id: 4,
    titulo: "Super Mario Galaxy",
    sinopsis:
      "Mario y Luigi viajan por el espacio en una nueva aventura para salvar el universo de una amenaza cósmica.",
    poster: "/img/super_mario_galaxy.jpg",
    genero: "Animación / Aventura",
    duracion: "98'",
    calificacion: "7",
    director: "Aaron Horvath",
    horarios: ["Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves"],
    trailer: "https://www.youtube.com/watch?v=Hz57G2KaAp8",
  },

  {
    id: 5,
    titulo: "La familia Benetón +2",
    sinopsis:
      "Cuando Toni Benetón cree tener todo bajo control en su familia multicultural, la llegada de dos bebés lo cambia todo.",
    poster: "/img/familia_benetton.jpg",
    genero: "Comedia",
    duracion: "87'",
    calificacion: "Todos los públicos",
    director: "No especificado",
    horarios: ["2D: 16:00", "2D: 18:00"],
    trailer: "https://www.youtube.com/watch?v=O9kD-WhRNus",
  },

  {
    id: 6,
    titulo: "Salvación",
    sinopsis:
      "El profesor Ryland Grace despierta en una nave espacial sin recuerdos. Descubre que su misión es salvar el Sol y la Tierra de la extinción.",
    poster: "/img/salvacion.jpg",
    genero: "Ciencia ficción",
    duracion: "156'",
    calificacion: "No recomendada para menores de 12 años",
    director: "No especificado",
    horarios: ["2D: 22:00"],
    trailer: "https://www.youtube.com/watch?v=jz6JB0LCNRs",
  },

  {
    id: 7,
    titulo: "Torrente Presidente",
    sinopsis:
      "José Luis Torrente vuelve tras años de silencio intentando convertirse en una figura política en su estilo más caótico y políticamente incorrecto.",
    poster: "/img/torrente_presidente.jpg",
    genero: "Comedia",
    duracion: "102'",
    calificacion: "No recomendada para menores de 16 años",
    director: "Santiago Segura",
    horarios: ["2D: 20:00", "2D: 22:00"],
    trailer: "https://www.youtube.com/watch?v=R_0EGCw7xkQ",
  },
];

export default peliculas;