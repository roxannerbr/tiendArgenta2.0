import React from 'react'
import PropTypes from 'prop-types'

function Niños(props) {

    const imagenes = `url('/assets/productos/${props.imagen}')`

  return (
    <div>
 
    <article className='niños'>
        <div className='profile-picture' style={{backgroundImage : imagenes}} >
            {/* <img src={`/assets/productos/${props.imagen}`} alt={props.alt} /> */}
        </div>
        <h2>{props.nombre}</h2>
    </article>

    </div>
  )
}

Niños.propTypes= {
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
  Niños.defaultProps= {
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
  

Niños.propTypes = {}

export default Niños
