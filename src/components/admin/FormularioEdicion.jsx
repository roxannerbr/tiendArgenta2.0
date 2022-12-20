import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function FormularioEdicion() {

  const navigate = useNavigate();
  const [variedad, setVariedad] = useState('productos')
  const [categorias,setCategorias] = useState([])
  const [id,setId] = useState('0')
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

  const buscarCategoria = (id) => {
    let nombreCategoria
    categorias.forEach(categoria => categoria.id === id ? nombreCategoria = categoria.nombre : "Sin Categoria")
    return nombreCategoria
  }
  const buscarSubCategoria = (id) => {
    let nombreSubCategoria
    subCategoria.forEach(subCategoria => subCategoria.id === id ? nombreSubCategoria = subCategoria.nombre : "Sin SubCategoria")
    return nombreSubCategoria
  }

  useEffect(()=>{
    let barra = actualUrl.lastIndexOf('/') + 1
    let id = actualUrl.substring(barra,100)
    let UrlSinId = actualUrl.substring(0,barra - 1)
    let nuevaBarra = UrlSinId.lastIndexOf('/') + 1 
    let variedad = UrlSinId.substring(nuevaBarra)
    setId(id)
    setVariedad(variedad)
  },[actualUrl])


  useEffect(()=>{
    fetch("http://localhost:3012/categorias")
    .then((response) => response.json())
    .then((valores) => {
      setCategorias(valores.data);
      fetch("http://localhost:3012/subCategorias")
      .then((respuesta) => respuesta.json())
      .then((subCategoria) => {
        setSubCategoria(subCategoria.data);
        fetch(`http://localhost:3012/productos/detalle/${id}?variedad=${variedad}`)
        .then((respuesta2) => respuesta2.json())
        .then((producto) => {
          setValues(producto.data[0])
          setIsLoading(false)
        })
      })
    })
    .catch(error => console.log(error))
  },[isLoading])

  console.log(values);
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
    let response = await axios.put(`http://localhost:3012/productos/admin/editar/${id}?variedad=${variedad}`,values)
    console.log(response);
    if(response.status === 200){
      return navigate('/admin/productos')
    }
 }
 console.log(id);

  if (isLoading) {
    return(
      <div>
        Cargando ...
      </div>
    )
  }
  return (

    <section className='Crear-Producto'>
      <h1>Editando {variedad}</h1>
      <form onSubmit={handleSubmit}>

        <div className='form-control'>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value={values.titulo} onChange={handleChange}/>
                <small>Debe ingresar un Nombre</small>
          </div>
        <div className='form-control'>
                <label htmlFor="precio">Precio</label>
                <input type="text" name="precio" id="precio" value={values.precio} onChange={handleChange}/>
                <small>Debe ingresar un Precio</small>
          </div>

        {variedad !== "productos" ? 

        <div>
          <div className='form-control'>
                <label htmlFor="descripcion">Descripcion</label>
                <textarea name="descripcion" id="descripcion" cols="30" rows="10" value={values.descripcion} placeholder='Escriba algo por favor' onChange={handleChange}></textarea>
                <small>Debe ingresar una descripcion</small>
          </div>

          <div className='form-control'>
            <label htmlFor="hombre"> Hombre</label>
            <select name="hombre" id="hombre" onChange={handleChange}>
              <option defaultValue={values.hombre} hidden>{values.hombre === 1 ? "Si" : "No"}</option>
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </div>

          <div className='form-control'>
            <label htmlFor="mujer"> Mujer</label>
            <select name="mujer" id="mujer" onChange={handleChange}>
              <option defaultValue={values.mujer} hidden>{values.mujer === 1 ? "Si" : "No"}</option>
              <option value="1">Si</option>
              <option value="0">No</option>
            </select>
          </div>

      <div className='form-control'>
        <label htmlFor="niños">Niños</label>
        <select name="niños" id="niños" onChange={handleChange}>
          <option defaultValue={values.niños} hidden>{values.niños === 1 ? "Si" : "No"}</option>
          <option value="1">Si</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria" onChange={handleChange}>
          <option defaultValue={values.categoriaId} selected hidden>{buscarCategoria(values.categoriaId)}</option>
          {categorias.map(categoria => 
              <option value={categoria.id}> {categoria.titulo}</option>
          )}
        </select>
      </div>
        </div>       
            :
            <div>
              <div className='form-control'>
                <label htmlFor="subCategoria">SubCategoria</label>
                <select name="subCategoria" id="subCategoria" onChange={handleChange}>
                  <option defaultValue={values.subCategoriaId} selected hidden>{buscarSubCategoria(values.subCategoriaId)}</option>
                  {subCategoria.map(subCategoria => 
                      <option value={subCategoria.id}> {subCategoria.titulo}</option>
                  )}
                </select>
              </div>
            </div>
        }
        <div className='form-control'>
          <button type='submit'>
            Editar Producto
          </button>
        </div>
      </form>
    </section>
    
  )
}

export default FormularioEdicion