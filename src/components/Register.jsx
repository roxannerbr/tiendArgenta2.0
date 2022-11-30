import React from 'react'

function Register() {
  return (
    <div>
        <body className="register">
  
  <main>
      <section className="form-reglog">
          <h1>Crear cuenta</h1>
          <p className="textcrear">Complete este formulario para poder crear una cuenta.</p>
          <form  action="" method="post" enctype="multipart/form-data" id="formulario">{/* ENCTYPE FUNDAMENTAL PARA SUBIR IMG CON MULTER */}

              <div>
                  <input className="ingreso" type="text" name="Nombres" id="Nombres" value="" placeholder="Ingrese su nombre" />
                  <small id="nombresContainer">nombres</small>                  
              </div>
              <div>
                  <input className="ingreso" type="text" name="Apellidos" id="Apellidos" value="" placeholder="Ingrese su apellido" />
                  <small id="apellidosContainer">apellidos</small>
              </div>
              <div>
                  <input className="ingreso" type="email" name="email" id="email" value="" placeholder="Ingrese su email electr&oacute;nico" />
                  <small id="emailContainer">email </small>
              </div>
              <div>
                  <input className="ingreso" type="password" name="pass" id="pass" value="" placeholder="Ingrese su contraseña" />
                  <small id="passContainer">pass </small>
              </div>
              <div>
                  <input className="ingreso" type="password" name="pass2" id="pass2" value="" placeholder="Confirme su contraseña" />
                  <small id="pass2Container">pass2</small>
              </div>
              <div className="mb-3">
                  <label htmalFor="formFileMultiple" className="form-label">Subir imágen</label>
                  <input className="form-control" type="file" name="imagen" id="formFileMultiple" value="" />
                  <small id="imagenContainer">imagen</small>
              </div>

              <div className="aceptoTerm">
                  <label><input type="checkbox" name="Terminos" id="terminos"/>&nbsp;Acepto los&nbsp;<a href="">Términos y Condiciones.</a></label>
                  <small id="terminosContainer">terminos</small> 
              </div>
              <div> 
                  <small className="error-msg" id="errorSubmit"></small>
                  <button type="submit"className="boton">Registrarme</button>
              </div>
              <div className="linea"></div>
              <p>¿Ya tienes cuenta?<a href="/usuario/login"> Iniciar sesión</a></p>
          </form>
      </section>
  </main>
 
  <script src="/javascript/register.js"></script>
</body>
    </div>
  )
}

export default Register


