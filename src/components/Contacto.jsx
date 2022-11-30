import React from 'react'

function Contacto() {
  return (
    <div >
      <body className="contacto">  
  <main>
      <section className="form-reglog">
          <h1>Contactanos</h1>
          <form action="" method="post">
              <div>
                  <input className="mensaje" type="name" name="name" id="name" placeholder="Nombre" required/>
                  <small>*Ingrese su nombre:</small>
              </div>
              <div>
                  <input className="mensaje" type="email" name="email" id="email" placeholder="Ingrese su correo electr&oacute;nico" required/>
                  <small>*Ingrese su E-mail</small>
              </div>
              <div>
                <input className="mensaje" type="asunto" name="asunto" id="asunto" placeholder="Asunto" required/>
                <small>*Ingrese un asunto</small>
              </div>
              <div>
                <textarea className="mensaje" type="mensaje" name="mensaje" id="mensaje" placeholder="Mensaje" rows="6" required></textarea>
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



