import React from 'react'
import PropTypes from 'prop-types'
import Cards from '../partials/Cards'

function Coleccionables(props) {

  const imagenes = `url('/assets/productos/${props.imagen}')`

  return (
    <div>
 
    <article className='coleccionables'>
      <Cards>
      <div className='profile-picture' style={{backgroundImage : imagenes}} >
            {/* <img src={`/assets/productos/${props.imagen}`} alt={props.alt} /> */}
        </div>
        <div>
        <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
        </div>
      </Cards>
        
    </article>

    </div>
  )
}

Coleccionables.propTypes= {
    id: PropTypes.number,  
    titulo: PropTypes.string,
    categoria: PropTypes.number,
    subcategoria: PropTypes.number,
    precio: PropTypes.number,
    descuento: PropTypes.number, 
    stock: PropTypes.number,
    descripcion:PropTypes.string,    
    imagen: PropTypes.string,
    alt: PropTypes.string
  }
  Coleccionables.defaultProps= {
    id: 0,
    titulo: "imagen x defecto",
    categoria: 1,
    subcategoria: 2,
    precio: 100,
    descuento: 20,
    stock: 1,
    descripcion:"default",    
    imagen: "default-image.png",
    alt: "no se encontro el producto"
  }
  

Coleccionables.propTypes = {}

export default Coleccionables

