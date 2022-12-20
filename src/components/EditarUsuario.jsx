import React from 'react'

function EditarUsuario() {

  return (       
      
      <main className='usuario'>
        <form action="/usuario/editarUsuario" method="post" enctype="multipart/form-data" id="formulario">{/* ENCTYPE FUNDAMENTAL PARA SUBIR IMG CON MULTER */}
          
          <div className="foto">
            <img src={`/assets/usuario/profile3.jpg`} alt=""/>
            <div className="selImg mb-3">
              <label htmlFor="formFileMultiple" className="form-label">Cambiar imagen de perfil</label>
              <input className="form-control" type="file" name="imagen" id="formFileMultiple" value="" />
              <small className="red" id="imagenContainer"></small>
            </div>
          <h3>Nombre y apellido</h3>
          
          </div>
          <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Datos personales
              </button>
            </h2>
            </div>
            
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <ul>
                  <li><span>Editar Nombres</span>
                    <input type="text" name="Nombres" className="form-control" id="Nombres" value="" placeholder="Nombres"/>
                    <small className="red" id="nombresContainer">nombres</small>
                  </li>
                  <li><span>Editar Apellidos</span>
                    <input type="text" name="Apellidos" className="form-control" id="Apellidos" value="" placeholder="Apellidos"/>
                    <small className="red" id="apellidosContainer">apellidos</small>
                  </li>
                  
                  <li>
                    <span>DNI</span>
                    <input className="form-control" type="number" name="dni" id="dni" value="" placeholder="Ingrese su DNI" />
                    <small className="red" id="dniContainer">dni</small>
                  </li>
                  <li><span>Teléfono</span>
                    <input className="form-control" type="number" name="telefono" id="telefono" value="" placeholder="Ingrese su Teléfono" />
                    <small className="red" id="telefonoContainer">telefono</small>
                  </li>
                </ul></div>
              </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Datos de envío
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul>
                    <li><span>Dirección</span><input className="form-control" type="text" name="direccion" id="direccion" value="" placeholder="Ingrese su dirección" />
                      <small className="red" id="direccionContainer">direccion</small></li>
                    <li><span>Localidad</span> <input className="form-control" type="text" name="localidad" id="localidad" value="" placeholder="Ingrese su localidad" />
                      <small className="red" id="localidadContainer">localidad </small></li>
                    <li><span>Provincia</span><input className="form-control" type="text" name="provincia" id="provincia" value="" placeholder="Ingrese su provincia" />
                      <small className="red" id="provinciaContainer">provincia </small></li>
                    <li><span>Código postal</span> <input className="form-control" type="number" name="codPost" id="codPost" value="" placeholder="Ingrese su código postal" />
                      <small className="red" id="codPostContainer">codigo postal</small></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Mis compras
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <a href="/productos/carrito"><h3>Carrito</h3></a> </div>
                </div>
              </div>
              <div className="button d-flex justify-content-center">
                <small className="error-msg" id="errorSubmit"></small>
                <button className="btn btn-success" type="submit">Aceptar cambios</button>
              </div>
            </div>
            </form>  

            <script src="/javascript/editarUsuario.js"></script>
          </main>
        
  )
}

export default EditarUsuario



  
      