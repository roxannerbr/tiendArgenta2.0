import React, { useState, useEffect } from 'react'
//import { NavLink } from 'react-router-dom';
import cargando from '../../assets/productos/spin.gif'
//import imagen from '../../assets/productos/Col-Aguero.png'

function Productos2() {

    const [cotillon, setCotillon] = useState([])
    const [coleccionables, setColeccionables] = useState([])
    const [indumentariaHombre, setIndumentariaHombre] = useState([])
    const [indumentariaMujer, setIndumentariaMujer] = useState([])
    const [indumentariaInfantil, setIndumentariaInfantil] = useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [imgCotillon, setImgCotillon] = useState(false)
    const [imgColeccionables, setImgColeccionables] = useState(false)
    const [imgHombre, setImgHombre] = useState(false)
    const [imgMujer, setImgMujer] = useState(false)
    const [imgInfantil, setImgInfantil] = useState(false) 

    useEffect(() => {
        fetch("http://localhost:3012/api/categorias")
            .then((response) => response.json())
            .then((valores) => {
                setCotillon(valores.data[0].cotillon)
                setColeccionables(valores.data[0].coleccionable)
                setIndumentariaHombre(valores.data[0].indumentariaHombre)
                setIndumentariaMujer(valores.data[0].indumentariaMujer)
                setIndumentariaInfantil(valores.data[0].indumentariaInfantil)
                setIsLoading(false)
            }).catch(error => console.log(error))
    }, [isLoading])

     const handleSelected =(e)=>{
      console.log(e.target.name);
      let categoria=e.target.name
      let id=e.target.value 
      
       switch (categoria) {
        case "cotillon":
          let producto= cotillon.find(cotillon =>{
            return cotillon.id== id
           })  
           setImgCotillon(producto.imagen)         
          break;

          case "coleccionables":
            producto= coleccionables.find(coleccionables => coleccionables.id=== id)
           setImgColeccionables(producto.imagen) 
            break;

            case "hombre":
              producto= indumentariaHombre.find(hombre => hombre.id=== id)
           setImgHombre(producto.imagen) 
              break;

              case "mujer":
                producto= indumentariaMujer.find(mujer => mujer.id=== id)
          setImgMujer(producto.imagen) 
                break;

                case "infantil":
                  producto= indumentariaInfantil.find(infantil => infantil.id=== id)
           setImgInfantil(producto.imagen)  

        default:
          break; 
      }
    }

    if (isLoading) {
        return (
            <div className='box-loading'>
                <img src={cargando} alt="loading" />
                <h2>cargando</h2>
            </div>
        )
    }
    return (
    <div className="box-menu">
      <h4>Productos</h4>
        <article className='producto'>
                    <label htmlFor="cotillon"><i className="fa-regular fa-file-lines"></i></label>                  
                    <h5>Cotillon</h5>
                    <select name="cotillon" id="cotillon"  onChange={handleSelected} >
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {cotillon.map(cotillon=>
                    <option value={cotillon.id}>{cotillon.nombre}</option>
                    )}                    
                    </select>
                  </article>
               
                  <article className='producto'>
                  <i className="fa-regular fa-file-lines"></i>
                    <h5>Colec</h5>
                    <select name="coleccionables" id="coleccionables">
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {coleccionables.map(coleccionable=>
                    <option value={coleccionable.id}>{coleccionable.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  
                  <article className='producto'>
                  <i className="fa-regular fa-file-lines"></i>
                    <h5>Hombre</h5>
                    <select name="hombre" id="hombre">
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {indumentariaHombre.map(indumentariaHombre=>
                    <option value={indumentariaHombre.id}>{indumentariaHombre.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  
                  <article className='producto'>
                  <i className="fa-regular fa-file-lines"></i>
                    <h5>Mujer</h5>
                    <select name="mujer" id="mujer">
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {indumentariaMujer.map(indumentariaMujer=>
                    <option value={indumentariaMujer.id}>{indumentariaMujer.nombre}</option>
                    )}                    
                    </select>
                  </article>
                 
                  <article className='producto'>
                  <i className="fa-regular fa-file-lines"></i>
                    <h5>Niños</h5>
                    <select name="infantil" id="infantil">
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {indumentariaInfantil.map(indumentariaInfantil=>
                    <option value={indumentariaInfantil.id}>{indumentariaInfantil.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  </div>
                  )
                }
                
              

export default Productos2