import React from 'react'

function busqueda() {
  return (
    <div>
       <body class="busqueda">
      <main> 
      <h3>Resultados relacionados a: </h3>
      <section className="cardProduct">   
      {/* HACER FUNCIONAL EL BOTON BUSQUEDA */}     
           {/* include('./partials/cards',{
              id: producto.id,
              imagen: producto.imagenes[0].nombre,
              titulo: producto.titulo,
              descuento: producto.descuento,
              precio: producto.precio 
            })          */}
      </section>
      
      <h3>No se encontraron productos relacionados: </h3>
      <section className="resultados">
        <div className="res-error">
            <img src="/assets/productos/searchNotFound.gif" alt="producto no encontrado" />
        </div>
      </section>
      <h3>UHHH! No se encontraron productos</h3>      
  </main>
  </body>
    </div>
  )
}

export default busqueda
    
    
  


