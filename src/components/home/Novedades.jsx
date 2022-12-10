import React,{useState} from 'react'
import PropTypes from 'prop-types'
//import Productos from '../productos/Productos2'

function Novedades(props) {

  const [productos,setProductos] = useState([]) 

  return (
    <div>
      
      <body className="novedades">
  
  <main>
     <h1 className="productsPage">NOVEDADES</h1> 
    <section className="cardProduct">      
         
    {/*  {Productos.map(producto =>{
          <Productos
          titulo= {producto.titulo}
          categoria= {producto.categoria} 
          subCategoria= {producto.subCategoria}
          precio= {producto.precio}
          descuento= {producto.descuento} 
          stock= {producto.stock}
          descripcion={producto.descripcion}  
          imagen= {producto.imagen}
          alt= {producto.alt}
          />
        })
      }       */}
        
    </section>
  </main>
  
</body>

    </div>
  )
}

Novedades.propTypes = {}

export default Novedades

