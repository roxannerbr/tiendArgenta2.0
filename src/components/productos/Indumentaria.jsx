import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import Cards from '../partials/Cards'
import Article from '../home/Article';



function Indumentaria(props) {

    let productos=[
        {
          id:1,
          imgPrincipal:'H-messi.png',
          titulo:'HOMBRE',
          url:<NavLink to={"/Indumentaria"}/>
        },
        {
          id:2,
          imgPrincipal:'Combo-Fan.png',
          titulo:'COTILLÓN',
          url:<NavLink to={"/productos/Cotillon"}/>
        },
        {
          id:3,
          imgPrincipal:'Inf-manta.png',
          titulo:'NOVEDADES',
          url:<NavLink to={"/productos/Novedades"}/>
        },
        {
          id:4,
          imgPrincipal:'Col-Messi.png',
          titulo:'COLECCIONABLES',
          url:<NavLink to={"/productos/Coleccionables"}/>
        },
      ]

   /*  const imagenes = `url('/assets/productos/${props.imagen}')` */
   const [indumentaria,setIndumentaria] = useState([])
   const [loading,setLoading] = useState(true)


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

            
               <div /* className='subCategorias' */>                
                <NavLink to={"/components/productos/indumentaria/Hombre"}>
                    <label htmlFor="hombre"><img src="/assets/productos/H-Alter.png" alt="" /></label>
                    <input type="checkbox" name='hombre' id='hombre'/>
                    </NavLink>                    
                </div>
                
                <div /* className='subCategorias' */>
                <NavLink to={"/components/productos/indumentaria/Mujer"}>
                    <label htmlFor="mujer"><img src="/assets/productos/M-titular.png" alt="" /></label>
                    <input type="checkbox" name='mujer' id='mujer'/>
                </NavLink>
                </div>
                
                <div /* className='subCategorias' */>
                <NavLink to={"/components/productos/indumentaria/Niños"}>
                    <label htmlFor="niños"><img src="/assets/productos/Inf-manta.png" alt="" /></label>
                    <input type="checkbox" name='niños' id='niños'/>
                </NavLink>
                </div> 
                
            </section>

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
    </div>
  )
  if (loading){
    return(
        <div>
            ...cargando
        </div>
    )
  }
  
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
