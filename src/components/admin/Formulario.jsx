import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Formulario() {

  const navigate = useNavigate();
  const [variedad, setVariedad] = useState('novedades')
  const [categoria,setCategoria] = useState([])
  const [subCategoria,setSubCategoria] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [values, setValues] = useState({
    nombre : "",
    precio : "",
    descripcion : "",
    categoria : "",
    subCategoria : "",
  })

  const actualUrl = window.location.href;
  
  useEffect(()=>{
    let barra = actualUrl.lastIndexOf('/') + 1
    let magia = actualUrl.substring(barra,100)
    setVariedad(magia)
  },[actualUrl])


  useEffect(()=>{
    fetch("http://localhost:3012/api/categorias")
    .then((response) => response.json())
    .then((valores) => {
      setCategoria(valores.result);
      fetch("http://localhost:3012/api/categorias")
      .then((respuesta) => respuesta.json())
      .then((subCategoria) => {
        setSubCategoria(subCategoria.data);
        setIsLoading(false)
      })
    })
    .catch(error => console.log(error))
  },[isLoading])

  const handleChange = (e) => {
    let {target} = e
    let {name,value} = target

    let newValues = {
      ...values,
      [name] : value
    }

    setValues(newValues)
  };
 const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await axios.post(`http://localhost:3012/productos/admin/crear?variedad=${variedad}`,values)
    console.log(response);
    if(response.status === 200){
      return navigate('/admin')
    }
 }

  if (isLoading) {
    return(
      <div>
        Cargando ...
      </div>
    )
  }
  return (

    <section className='Crear-Producto'>

      <h1>Creando {variedad}</h1>
      <form onSubmit={handleSubmit}>

        <div className='form-control'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={handleChange}/>
                <small>Debe ingresar un Nombre</small>
          </div>
        <div className='form-control'>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" id="precio" onChange={handleChange}/>
                <small>Debe ingresar un Precio</small>
          </div>

        {variedad !== "cotillon" ? 

        <div>
          <div className='form-control'>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder='Escriba algo porfa' onChange={handleChange}></textarea>
                <small>Debe ingresar una descripcion</small>
          </div>
          <div className='form-control'>
            <label htmlFor="hombre">Hombre</label>
            <select name="hombre" id="hombre" onChange={handleChange}>
              <option value="" selected hidden>Seleccione una opcion</option>
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </div>

      <div className='form-control'>
        <label htmlFor="mujer">Mujer</label>
        <select name="mujer" id="mujer" onChange={handleChange}>
          <option value="" selected hidden>Seleccione una opcion</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className='form-control'>
        <label htmlFor="niños">Niños</label>
        <select name="niños" id="niños" onChange={handleChange}>
          <option value="" selected hidden>Seleccione una opcion</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria" onChange={handleChange}>
          <option value="" selected hidden>Seleccione una opcion</option>
          {categoria.map(categoria => 
              <option value={categoria.id}> {categoria.nombre}</option>
          )}
        </select>
      </div>
        </div>
        
        
            :
              <div className='form-control'>
                <label htmlFor="subCategoria">subCategoria</label>
                <select name="subCategoria" id="subCategoria" onChange={handleChange}>
                  <option value="" selected hidden>Seleccione una opcion</option>
                  {subCategoria.map(subCategoria => 
                      <option value={subCategoria.id}> {subCategoria.nombre}</option>
                  )}
                </select>
              </div>
        }
        <div className='form-control'>
          <button type='submit'>Crear Nuevo Producto</button>
        </div>
      </form>
    </section>
    
  )
}

export default Formulario
