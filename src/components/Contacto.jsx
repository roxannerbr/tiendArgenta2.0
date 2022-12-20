import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Contacto() {

  const navigate = useNavigate();
    const [values, setValues] = useState({
        nombre : "",
        email : "",
        mensaje : "",
    })
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
        let response = await axios.post(`http://localhost:3012/crearMensajes`,values)
        console.log(response);
        if(response.status === 200){
            return navigate('/')
        }
    }


  return (
    <div >
      <body className="contacto">  
  <main>
      <section className="form-reglog">
          <h1>Contactanos</h1>
          <form onSubmit={handleSubmit} action="" method="post">
              <div>
                  <input className="mensaje" type="name" name="name" id="name" placeholder="Nombre" onChange={handleChange} required/>
                  <small>*Ingrese su nombre:</small>
              </div>
              <div>
                  <input className="mensaje" type="email" name="email" id="email" placeholder="Ingrese su correo electr&oacute;nico" onChange={handleChange} required/>
                  <small>*Ingrese su E-mail</small>
              </div>
              <div>
                <input className="mensaje" type="asunto" name="asunto" id="asunto" placeholder="Asunto" onChange={handleChange} required/>
                <small>*Ingrese un asunto</small>
              </div>
              <div>
                <textarea className="mensaje" type="mensaje" name="mensaje" id="mensaje" placeholder="Mensaje" rows="6" onChange={handleChange} required></textarea>
                <small>*Ingrese un mensaje</small>
              </div>
              <div> 
                  <button type="submit" className="boton">Enviar</button>
              </div>
          </form>
      </section>
  </main>
  
</body>
    </div>
  )
}

export default Contacto



