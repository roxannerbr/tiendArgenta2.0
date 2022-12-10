import React from 'react'
import PropTypes from 'prop-types'
import Hombre from './Hombre';
//import Hombre from '../../assets/H-Alter.png'
import Mujer from './Mujer';
//import Mujer from '../../assets/M-titular.png'
import Niños from './Niños';
//import Niños from '../../assets/Inf-alternativa.png'


function Indumentaria(props) {

   /*  const imagenes = `url('/assets/productos/${props.imagen}')` */

  return (
    <div>
        <main className='indumentaria'>
            <section>

            <article className='indumentaria'>

                <div>
                    {
                        props.Hombre==="si"?
                        <img src={`/productos/${props.imagen}`} alt={props.alt}/>
                        :
                        null
                    }
                    {
                        props.Mujer==="si"?
                        <img src={`/productos/${props.imagen}`} alt={props.alt}/>
                        :
                        null
                    }
                    {
                        props.Niños==="si"?
                        <img src={`/productos/${props.imagen}`} alt={props.alt}/>
                        :
                        null
                    }
                
                
                
              {/*  <div className='profile-picture' style={{backgroundImage : imagenes}} > */}
                
               </div> 
              <div>
                <h2>{props.nombre}</h2>
                <p>{props.descripcion}</p>
                <span>{props.precio}</span>
                <button>Añadir al carrito</button>
              </div>
            </article>


               <div className='subCategorias'>
                    <label htmlFor="hombre"><img src="/assets/productos/H-Alter.png" alt="" /></label>
                    <input type="checkbox" name='hombre' id='hombre'/>
                </div>
                <div className='subCategorias'>
                    <label htmlFor="mujer"><img src="/assets/productos/M-titular.png" alt="" /></label>
                    <input type="checkbox" name='mujer' id='mujer'/>
                </div>
                <div className='subCategorias'>
                    <label htmlFor="niños"><img src="/assets/productos/Inf-alternativa.png" alt="" /></label>
                    <input type="checkbox" name='niños' id='niños'/>
                </div> 
            </section>

            <section className='productos'>
                <div className='Hombre'>
                    <h2>Hombre</h2>
                    <img src={Hombre} alt="Hombre" />
                    <div>
                    <Hombre/>
                    </div>
                </div>             

                <div className='Mujer'>
                    <h2>Mujer</h2>
                    <img src={Mujer} alt="Mujer" />
                    <div>
                    <Mujer/>
                    </div>
                </div>             

                <div className='Niños'>
                    <h2>Niños</h2>
                    <img src={Niños} alt="Niños" />
                    <div>
                    <Niños/>
                    </div>
                </div>                
            </section>
        </main>
    </div>
  )
}

Indumentaria.propTypes= {
    id: PropTypes.number,  
    titulo: PropTypes.string,
    categoria: PropTypes.string,
    subcategoria: PropTypes.string,
    precio: PropTypes.number,
    descuento: PropTypes.number, 
    stock: PropTypes.number,
    descripcion:PropTypes.string,    
    imagen: PropTypes.string,
    alt: PropTypes.string
  }
  Indumentaria.defaultProps= {
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


export default Indumentaria
