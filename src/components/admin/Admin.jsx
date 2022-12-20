import React from 'react'
import { NavLink } from 'react-router-dom';
import ProductosCopy from './ProductosCopy';
//import imagen from '../../assets/productos/escudo.png'

function Admin() {
  
  return (

    <main className='dashboard'>
     
     <section className="statis mt-3 text-center">
      <div className="row estadisticas">
        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div className="box">
          <i className="fa-regular fa-eye"></i>
            <h3>5,154</h3>
            <p className="lead">Visitas</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
          <div className="box">
          <i className="fa-regular fa-user"></i>
            <h3>245</h3>
            <p className="lead">Usuarios registrados</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
          <div className="box">
          <i className="fa-solid fa-cart-shopping"></i>
            <h3>5,154</h3>
            <p className="lead">Cantidad de productos</p>
          </div>
        </div>
      </div>
    </section>

    <section className='separador'>
            <h3>ADMINISTRACION</h3>
            <p>administrar de forma sencilla tu propia pagina</p>
      </section>

    <section className='admin'>

      {/* usuarios */}
      <div className="box">
          <NavLink to="/usuario/perfil">
            <i className="fas fa-users icon"></i>
            <h4>Usuario</h4>
            <p> Modificar Usuarios </p>
            <div className="background_hover"> </div>
          </NavLink>
        </div>

      {/* productos */}
      <div className="box">
              <NavLink to="/admin/productos">
                <i className="fas fa-shopping-cart icon"></i>
                <h4>Productos</h4>
                <p> Modificar Productos </p>
                <div className="background_hover"> </div>
              </NavLink>
          </div>

      {/* mensajes */}
      <div className="box">        
            <NavLink to="/contacto">
                <i className="fas fa-envelope icon"></i>
                <h4>Mensajes</h4>
                <p> Responder Mensajes </p>
                <div className="background_hover"> </div>
                </NavLink>
            </div>
    </section>

    {/* productos */}
              <ProductosCopy/>
    </main>
    
  )
}

export default Admin
