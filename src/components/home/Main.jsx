import React from 'react'
import Article from'./Article'
import Countdown1 from'./Countdown1'
//import Novedades from'./Novedades'

function main() {

  let productos=[
    {
      id:1,
      imgPrincipal:'H-messi.png',
      titulo:'INDUMENTARIA'
    },
    {
      id:2,
      imgPrincipal:'Combo-Fan.png',
      titulo:'COTILLÓN'
    },
    {
      id:3,
      imgPrincipal:'Inf-manta.png',
      titulo:'NOVEDADES'
    },
    {
      id:4,
      imgPrincipal:'Col-Messi.png',
      titulo:'COLECCIONABLES'
    },
  ]
  return (
    <div>
     <body class="home">
      <main>
      
       <h1 className="productsPage">PROXIMO PARTIDO EN</h1>
         <section>             
           <Countdown1></Countdown1>           
         </section>
    
       <h1 className="productsPage">NUEVOS INGRESOS</h1>
         <section className="cardProduct">
         {/*  productos.forEach(producto => 
              { include('./partials/cards',{
                  id: producto.id,
                  imagen: producto.imagenes[0].nombre,
                  titulo: producto.titulo,
                  descuento: producto.descuento,
                  precio: producto.precio
              }) }
           */}
        </section>
         {/* {productos.map((producto,index)=>
      <Novedades
         producto={producto}
        key={index}
        id={producto.id}
        imgPrincipal={producto.imgPrincipal}
        titulo={producto.titulo} 
         /> 
      )}   */}                
         
   
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
      <Article
        producto={producto}
        key={index}
        id={producto.id}
        imgPrincipal={producto.imgPrincipal}
        titulo={producto.titulo}
         />     
    )}  
  
    </section>
  </main>
  
  </body>
  </div>
  )
}

export default main