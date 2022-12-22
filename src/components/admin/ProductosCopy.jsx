import React, { useState, useEffect } from 'react'
//import { NavLink } from 'react-router-dom';
import cargando from '../../assets/productos/spin.gif'
import imagen from '../../assets/productos/escudo.png'

function ProductosCopy() {

    const [cotillon, setCotillon] = useState([])
    const [coleccionables, setColeccionables] = useState([])
    const [Hombre, setHombre] = useState([])
    const [Mujer, setMujer] = useState([])
    const [Infantil, setInfantil] = useState([])
    const [isLoading, setIsLoading]= useState(false)
    const [prodCotillon, setprodCotillon] = useState(false)
    const [prodColeccionables, setprodColeccionables] = useState(false)
    const [prodHombre, setprodHombre] = useState(false)
    const [prodMujer, setprodMujer] = useState(false)
    const [prodInfantil, setprodInfantil] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3012/api/categorias")
            .then((response) => response.json())
            .then((valores) => {
                setCotillon(valores.data[3].cotillon)
                setColeccionables(valores.data[0].coleccionables)
                setHombre(valores.data[0].Hombre)
                setMujer(valores.data[0].Mujer)
                setInfantil(valores.data[0].Infantil)
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
              producto= Hombre.find(Hombre => Hombre.id=== id)
           setprodHombre(producto) 
              break;

              case "mujer":
                producto= Mujer.find(Mujer => Mujer.id=== id)
          setprodMujer(producto) 
                break;

                case "infantil":
                  producto= Infantil.find(Infantil => Infantil.id=== id)
           setprodInfantil(producto)  
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
                 <img src={prodHombre? `/assets/productos/${prodHombre.imagen}`:imagen} alt="hombre"/>
                    <h5>{prodHombre? prodHombre.nombre : "Hombre"}</h5>
                    <select name="hombre" id="hombre"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {Hombre.map(Hombre=>
                    <option value={Hombre.id}>{Hombre.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  
                  <article className='producto'>
                  <img src={prodMujer? `/assets/productos/${prodMujer.imagen}`:imagen} alt="mujer"/> 
                    <h5>{prodMujer? prodMujer.nombre : "Mujer"}</h5>
                    <select name="mujer" id="mujer"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {Mujer.map(Mujer=>
                    <option value={Mujer.id}>{Mujer.nombre}</option>
                    )}                    
                    </select>
                  </article>
                 
                  <article className='producto'>
                  <img src={prodInfantil? `/assets/productos/${prodInfantil.imagen}`:imagen} alt="infantil"/>
                    <h5>{prodInfantil? prodInfantil.nombre : "Infantil"}</h5>
                    <select name="infantil" id="infantil"  onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>                    
                    {Infantil.map(Infantil=>
                    <option value={Infantil.id}>{Infantil.nombre}</option>
                    )}                    
                    </select>
                  </article>
                  </div>
                  )
                }
                
              

export default ProductosCopy