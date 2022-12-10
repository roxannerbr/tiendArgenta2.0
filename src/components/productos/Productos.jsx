import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Cotillon from './components/productos/Cotillon';
import Coleccionables from './components/productos/Coleccionables';
import Indumentaria from './components/productos/Indumentaria';

function Productos(props) {

const [productos,setProductos] = useState([])
const [cotillon,setCotillon]=useState('Cotillon')
const [coleccionables,setColeccionables]=useState('Coleccionables')
const [indumentaria,setIndumentaria]=useState('Indumentaria')


/* probando handleclick */
const handleClick = (e) => {
        
  e.preventDefault()
  if (e.target.classList.value === 'Ver-cotillon') {
      console.log('hiciste Click');
      e.target.classList.value = 'Ver-coleccionables'
      setProductos(Coleccionables)
      setCotillon('Ver cotillon')
  }else{
      console.log('hiciste Click');
      setColeccionables(Indumentaria)
      e.target.classList.value = 'Ver-indumentaria'
      setCotillon('Ver cotillon')
  }

/* setProductos(producto)
setMostrar('ver productos')

const seteando =() =>{
  setProductos(productos)
}
seteando() */


/* const handleProductos =async()=>{
  let resultado=await productos
  setProductos(resultado)
} */

  return (
  <div>
    <main>

     <h1 className="productsPage">Productos</h1>

     <section className='boton'>
      <button className='ver-alumnos' onClick={handleClick}>{cotillon}</button>
     </section>

     <section className='categorias'>
      {cotillon.map(cotillon =>
        <Cotillon
        nombre={cotillon.nombre}
        imagen={cotillon.imagen}
        alt={cotillon.alt}
        />
        )}
     </section>
     <section className="cardProduct">
      {/* <li>probando handleclick</li> */}
     <li><i className="fas fa-trophy"><a href="/Productos" onClick={handleClick}>PRODUCTOS</a></i></li>
      <article>
        <div> 
          <p>{props.id}</p>
          <p>{props.titulo}</p>
          <p>{props.categoria}</p>
          <p>{props.subcategoria}</p>
          <p>{props.precio}</p> 
          <p>{props.descuento}</p>
          <p>{props.stock}</p>
          <p>{props.descripcion}</p>
          <img src={`/assets/productos/${props.nombre}`} alt={props.alt} />  
        </div>
      </article>  
     </section>

     <section className='cardProduct'>
      {productos.map(producto =>{
          <Productos
          titulo= {producto.titulo}
          categoria= {producto.categoria}
          subcategoria= {producto.subcategoria}
          precio= {producto.precio}
          descuento= {producto.descuento} 
          stock= {producto.stock}
          descripcion={producto.descripcion}    
          imagen= {producto.imagen}
          alt= {producto.alt}
          />
        })
      }      
     </section>

    </main>
  </div>
  )
}
}


export default Productos

