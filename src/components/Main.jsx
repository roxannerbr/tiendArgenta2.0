import React from 'react'
import Article from'./Article'
import Article2 from'./Article2'

function main() {

  let productos=[
    {
      id:1,
      imgPrincipal:'/assets/productos/H-Messi.png',
      titulo:'INDUMENTARIA'
    },
    {
      id:2,
      imgPrincipal:'/assets/productos/Combo-Fan.png',
      titulo:'COTILLÓN'
    },
    {
      id:3,
      imgPrincipal:'/assets/productos/Inf-manta.png',
      titulo:'NOVEDADES'
    },
    {
      id:4,
      imgPrincipal:'/assets/productos/Col-Messi.png',
      titulo:'COLECCIONABLES'
    },
  ]
  return (
    <div>
      <body class="home">
    <main>
    <h1 className="productsPage">PROXIMO PARTIDO EN</h1>
    <section>
      <div id="cuenta"></div>
    </section>
    
    <h1 className="productsPage">NUEVOS INGRESOS</h1>
      <section className="cardProduct">
                {/* id: producto.id,
                imagen: producto.imagenes[0].nombre,
                titulo: producto.titulo,
                descuento: producto.descuento,
                precio: producto.precio */}
      </section>
   
    <div className="contenedor-all">
      <input type="radio" name="imagen-slide" id="1" hidden/>
      <input type="radio" name="imagen-slide" id="2" hidden/>
      <input type="radio" name="imagen-slide" id="3" hidden/>
      <input type="radio" name="imagen-slide" id="4" hidden/>
    <div className="slide">
      <div className="img-slide">
        <img src="/assets/home/carrousel/BANNER-1.gif" alt=""/>
      </div>
      <div className="img-slide">
        <img src="/assets/home/carrousel/BANNER-2.gif" alt=""/>
      </div>
      <div className="img-slide">
        <img src="/assets/home/carrousel/BANNER-3.gif" alt=""/>
      </div>
      <div className="img-slide">
        <img src="/assets/home/carrousel/BANNER-4.gif" alt=""/>
      </div>
    </div>
  </div>
    
    <h1>CONOCÉ TODOS NUESTROS PRODUCTOS</h1>
    <section className="cards">   

    {productos.map((producto,index)=>
      <><Article
        producto={producto}
        key={index}
        id={producto.id}
        imgPrincipal={producto.imgPrincipal}
        titulo={producto.titulo}
         /> 
         {/* <Article2
        producto={producto}
        key={index}
        id={producto.id}
        imgPrincipal={producto.imgPrincipal}
        titulo={producto.titulo}
         />  */}
         </>
    )}  
  
    </section>
  </main>


  <script src="/javascript/simplyCountdown.min.js"></script>
    <script src="/javascript/countdown.js"></script>
  </body>
  </div>
  )
}

export default main