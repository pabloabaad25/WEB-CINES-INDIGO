function Inicio() {
  return (
    <section className="text-white text-center h-screen flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/hero.jpg')" }}
    >
      <h1 className="text-5xl font-bold">Cines Índigo</h1>
      <p className="mt-4">Vive la mejor experiencia de cine</p>

      <button className="mt-6 bg-red-600 px-6 py-2 rounded">
        Comprar Entradas
      </button>

      <div className="mt-10">
        <p className="bg-yellow-500 text-black inline-block px-4 py-2 rounded">
          Miércoles al cine: 5€
        </p>
      </div>
    </section>
  )
}

export default Inicio