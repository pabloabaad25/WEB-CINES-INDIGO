function Contacto() {
  return (
    <section className="p-6 bg-gray-900 text-white">
      <h1 className="text-3xl mb-4">Contacto</h1>

      <form className="flex flex-col gap-3 max-w-md">
        <input type="text" placeholder="Nombre" className="p-2 text-black" />
        <input type="email" placeholder="Email" className="p-2 text-black" />
        <textarea placeholder="Mensaje" className="p-2 text-black"></textarea>

        <button className="bg-red-600 p-2">Enviar</button>
      </form>

      <div className="mt-6">
        <p>Horario: 10:00 - 23:00</p>
        <p>Email: contacto@indigo.com</p>
      </div>
    </section>
  )
}

export default Contacto