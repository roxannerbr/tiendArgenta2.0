import React from 'react'

function main() {
  return (
    <main>
    <h1 class="productsPage">PROXIMO PARTIDO EN</h1>
    <section>
      <div id="cuenta"></div>
    </section>
    
    <h1 class="productsPage">NUEVOS INGRESOS</h1>
      <section class="cardProduct">
                id: producto.id,
                imagen: producto.imagenes[0].nombre,
                titulo: producto.titulo,
                descuento: producto.descuento,
                precio: producto.precio
            </section>
   
    <div class="contenedor-all">
      <input type="radio" name="imagen-slide" id="1" hidden/>
      <input type="radio" name="imagen-slide" id="2" hidden/>
      <input type="radio" name="imagen-slide" id="3" hidden/>
      <input type="radio" name="imagen-slide" id="4" hidden/>
    <div class="slide">
      <div class="img-slide">
        <img src="/images/home/carrousel/BANNER-1.gif" alt=""/>
      </div>
      <div class="img-slide">
        <img src="/images/home/carrousel/BANNER-2.gif" alt=""/>
      </div>
      <div class="img-slide">
        <img src="/images/home/carrousel/BANNER-3.gif" alt=""/>
      </div>
      <div class="img-slide">
        <img src="/images/home/carrousel/BANNER-4.gif" alt=""/>
      </div>
    </div>
  </div>
    
    <h1>CONOCÉ TODOS NUESTROS PRODUCTOS</h1>
    <section class="cards">
      <article class="card card1">
        <div class="contenedor">
          <a href="/indumentaria"><img src="/images/productos/H-Messi.png" alt="Camiseta hombre"/></a>
        </div>
        <div class="nombre">
          <h2>INDUMENTARIA</h2>
        </div>
      </article>
      <article class="card card2">
        <div class="contenedor">
          <a href="/productos/cotillon"><img src="/images/productos/Combo-Fan.png" alt="promos"/></a></div>
        <div class="nombre">
          <h2>COTILLON</h2>
        </div>
      </article>
      <article class="card card3">
        <div class="contenedor">
          <a href="/novedades"><img src="/images/productos/Inf-manta.png" alt="novedades"/></a>
        </div>
        <div class="nombre">
          <h2>NOVEDADES</h2>
        </div>
      </article>
      <article class="card card4">
        <div class="contenedor">
          <a href="/productos/coleccionables"><img src="/images/productos/Col-Messi.png" alt="impresiones 3d"/></a>
        </div>
        <div class="nombre">
          <h2>COLECCIONABLES</h2>
        </div>
      </article>
    </section>
  </main>
  )
}

export default main