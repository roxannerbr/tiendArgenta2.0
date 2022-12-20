import React from "react";

function Usuario() {
  return (
        <main className="usuario">
          <div className="foto">
          <img src={`/assets/usuario/profile3.jpg`} alt="" />
            <h3>ROXANA ROMANIELLO</h3>
            <div className="btnUsers">
              <a href="/usuario/editarUsuario">
                <button className="editUser">
                  <i className="fa-solid fa-user-gear"></i>
                </button>
              </a>
              <form action="/usuario/logout?_method=DELETE" method="post">
                <button className="cSession" type="submit">
                  <i className="fas fa-sign-out"></i>
                </button>
              </form>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Datos personales
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <span>romaniello@gmail.com</span>
                    <small>email</small>
                  </li>
                  <li>
                    <span>30785954</span>
                    <small>dni</small>
                  </li>
                  <li>
                    <span>3543618795</span> <small>telefono</small>
                  </li>
                </ul>
              </div>
            </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Datos de envío
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <span>plumas verdes 600</span>
                    <small>direccion</small>
                  </li>
                  <li>
                    <span>Rio Ceballos</span> <small>localidad</small>
                  </li>
                  <li>
                    <span>Cordoba</span>
                    <small>provincia</small>
                  </li>
                  <li>
                    <span>5111</span> <small>codpost</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Mis compras
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <a href="/productos/carrito">
                  <h3>Carrito</h3>
                </a>{" "}
              </div>
            </div>
          </div>
          </div>
        </main>
     
  
  );
}

export default Usuario;
