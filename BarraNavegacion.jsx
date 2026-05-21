function BarraNavegacion() {
  return (
    <nav className="navbar"> {/* Cambiado class por className para React */}
      <button className="custom-btn btn-3"><span>Cartelera</span></button>
      <button className="custom-btn btn-3"><span>Películas</span></button>
      <button className="custom-btn btn-15"><span>Entradas</span></button>
      <button className="custom-btn btn-15"><span>Contacto</span></button>
      <button className="custom-btn btn-15"><span>Promociones</span></button>

    </nav>
  )
}

export default BarraNavegacion