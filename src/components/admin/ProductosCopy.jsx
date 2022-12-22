import React, { useState, useEffect } from 'react'
//import { NavLink } from 'react-router-dom';
import cargando from '../../assets/productos/spin.gif'
import imagen from '../../assets/productos/escudo.png'

function ProductosCopy() {

    const [cotillon, setCotillon] = useState([])
    const [coleccionables, setColeccionables] = useState([])
    const [indumentariaHombre, setIndumentariaHombre] = useState([])
    const [indumentariaMujer, setIndumentariaMujer] = useState([])
    const [indumentariaInfantil, setIndumentariaInfantil] = useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [prodCotillon, setprodCotillon] = useState(false)
    const [prodColeccionables, setprodColeccionables] = useState(false)
    const [prodIndumentariaHombre, setprodIndumentariaHombre] = useState(false)
    const [prodIndumentariaMujer, setprodIndumentariaMujer] = useState(false)
    const [prodIndumentariaInfantil, setprodIndumentariaInfantil] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3012/api/categorias")
            .then((response) => response.json())
            .then((valores) => {
                setCotillon(valores.data[0].cotillon)
                setColeccionables(valores.data[0].coleccionables)
                setIndumentariaHombre(valores.data[0].indumentariaHombre)
                setIndumentariaMujer(valores.data[0].indumentariaMujer)
                setIndumentariaInfantil(valores.data[0].indumentariaInfantil)
                setIsLoading(false)
                
                console.log(valores);
                
            }).catch(error => console.log(error))
    }, [isLoading])

     const handleSelected =(e)=>{
      console.log(e.target.name);
      let categoria=e.target.name
      let id=e.target.value 
      let producto
       switch (categoria) {
        case "cotillon":
          producto= cotillon.find(cotillon =>{
            return cotillon.id=== id
           })  
           setprodCotillon(producto)     
          break;

          case "coleccionables":
            producto= coleccionables.find(coleccionables => coleccionables.id=== id)
           setprodColeccionables(producto)
            break;

            case "hombre":
              producto= indumentariaHombre.find(indumentariaHombre => indumentariaHombre.id=== id)
           setprodIndumentariaHombre(producto) 
              break;

              case "mujer":
                producto= indumentariaMujer.find(indumentariaMujer => indumentariaMujer.id=== id)
          setprodIndumentariaMujer(producto) 
                break;

                case "infantil":
                  producto= indumentariaInfantil.find(indumentariaInfantil => indumentariaInfantil.id=== id)
           setprodIndumentariaInfantil(producto)  
           break;

        default:
          break; 
      }

    if (isLoading) {
        return (
            <div className='box-loading'>
                <img src={cargando} alt="loading" />
                <h2>cargando</h2>
            </div>
        )
    }
  }
    return (
    <div className="box-menu">
      <h4>Ofertas del dia</h4>
        <article className='producto'>
                    <label htmlFor="cotillon"><img src={prodCotillon? `/assets/productos/${prodCotillon.imagen}`:imagen} alt="cotillon"/></label>                  
                    <h5>{prodCotillon? prodCotillon.nombre : "Cotillon"}</h5>
                    <select name="cotillon" id="cotillon"  onChange={handleSelected} >
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {cotillon.map(cotillon=>
                    <option value={cotillon.id}>{cotillon.nombre}</option>
                    )}                    
                    </select>
                  </article>
               
                  <article className='producto'>
                  <img src={prodColeccionables? `/assets/productos/${prodColeccionables.imagen}`:imagen} alt="coleccionables"/>
                    <h5>{prodColeccionables? prodColeccionables.nombre : "Coleccionables"}</h5>
                    <select name="coleccionables" id="coleccionables"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {coleccionables.map(coleccionable=>
                    <option value={coleccionable.id}>{coleccionable.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  
                  <article className='producto'>
                 <img src={prodIndumentariaHombre? `/assets/productos/${prodIndumentariaHombre.imagen}`:imagen} alt="hombre"/>
                    <h5>{prodIndumentariaHombre? prodIndumentariaHombre.nombre : "Hombre"}</h5>
                    <select name="hombre" id="hombre"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {indumentariaHombre.map(indumentariaHombre=>
                    <option value={indumentariaHombre.id}>{indumentariaHombre.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  
                  <article className='producto'>
                  <img src={prodIndumentariaMujer? `/assets/productos/${prodIndumentariaMujer.imagen}`:imagen} alt="mujer"/> 
                    <h5>{prodIndumentariaMujer? prodIndumentariaMujer.nombre : "Mujer"}</h5>
                    <select name="mujer" id="mujer"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {indumentariaMujer.map(indumentariaMujer=>
                    <option value={indumentariaMujer.id}>{indumentariaMujer.nombre}</option>
                    )}                    
                    </select>
                  </article>
                 
                  <article className='producto'>
                  <img src={prodIndumentariaInfantil? `/assets/productos/${prodIndumentariaInfantil.imagen}`:imagen} alt="infantil"/>
                    <h5>{prodIndumentariaInfantil? prodIndumentariaInfantil.nombre : "Infantil"}</h5>
                    <select name="infantil" id="infantil"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {indumentariaInfantil.map(indumentariaInfantil=>
                    <option value={indumentariaInfantil.id}>{indumentariaInfantil.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  </div>
                  )
                }
                
              

export default ProductosCopy