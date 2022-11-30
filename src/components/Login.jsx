import React from 'react'

function Login() {
  return (
    <div>
        <body className="login">
  
  <main>
      <section className="form-reglog">
          <h1>Iniciar sesión</h1>
          <form action="/usuario/login" method="post" id="form">
              <div>
                  <input className="ingreso" type="email" name="email" id="email" value="" placeholder="Ingrese su email electr&oacute;nico"/>
                  
                  <small id="emailContainer"> </small>
              </div>
              <div>
                  <input className="ingreso" type="password" name="pass" id="pass" placeholder="Ingrese su contraseña"/>
                  
                  <small id="passContainer"> </small>
                  
              </div>
              <div className="recForm">
                  <label><input type="checkbox" name="recordarme" id="recordarme"/>&nbsp;Recordarme</label>
                  <label><a href="/">Olvidé mi contraseña</a></label>
              </div>
              <div> 
                  <button type="submit" className="boton">Iniciar sesión</button>
              </div>
              <div className="linea"></div>
              <p>¿No tenes cuenta?<a href="/usuario/register"> Registrarme</a></p>
          </form>
      </section>
  </main>
  
  <script src="/javascript/loginVal.js"></script>
</body>

    </div>
  )
}

export default Login
