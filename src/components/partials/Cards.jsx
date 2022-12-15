    import React from 'react'
    import PropTypes from 'prop-types'

    
    function Cards(props) {
      return (
        

      <article className="ofertas">
            <a href="/productos/detalles/">
              <div className="imgBox">
                <img src={`/images/productos/${props.imagen}`} alt={props.imagen} className="itemOferta" />
              </div>
              <div className="DatosBox">
                <h4> {props.titulo}</h4>
        
                <div className="descard">
                  <small >${props.precio}</small>
                  <h4> {props.descuento}</h4>
                </div>
                
                <h2 className="price">${ props.precio - (props.precio * props.descuento / 100)}<small>,00</small></h2>
                <a href="/productos/carrito" className="comprar">Comprar</a>
              </div>
              </a>
          </article>
        
      )
    }

    Cards.propTypes = {
      titulo: PropTypes.string,
      precio: PropTypes.number,
      descuento: PropTypes.number,
      imagen:PropTypes.string,
      categoriaId: PropTypes.number
  }
  
  Cards.defaultProps = {
      titulo: "prueba de producto",
      precio: 1500,
      descuento: 15,
      imagen: "default-image.png",
      categoriaId: 1
  }
    
    export default Cards