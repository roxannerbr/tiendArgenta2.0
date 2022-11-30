import React from 'react'

function Indumentaria() {
  return (
    <div>
      <body className="indumentaria">
  
  <main>
    <h1>INDUMENTARIA</h1>
    <section className="cards">
      <article className="card card1">
        <div className="contenedor">
          <a href="/productos/hombre"><img src="/assets/productos/H-Alter.png" alt="camiseta niño"/></a>
        </div>
        <div className="nombre">
          <h2>HOMBRE</h2>
        </div>
      </article>
      <article className="card card2">
        <div className="contenedor">
          <a href="/productos/mujer"><img src="/assets/productos/M-titular.png" alt="promos"/></a></div>
        <div className="nombre">
          <h2>MUJER</h2>
        </div>
      </article>
      <article className="card card3">
        <div className="contenedor">
          <a href="/productos/infantil"><img src="/assets/productos/Inf-messi.png" alt="novedades"/></a>
        </div>
        <div className="nombre">
          <h2>INFANTIL</h2>
        </div>
      </article>
    </section>
  </main>
  
</body>

    </div>
  )
}

export default Indumentaria
