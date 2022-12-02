import React from 'react'
import logo from '../assets/home/header/logofinalizado.png'

function Header() {

  const menuHamburguesa=()=>{
    console.log('Hiciste click en el menú');
    document.querySelector("#burger").classList.toggle('desaparacer');
  }
  return (
    <div>
      <header>
       <marquee loop="infinite" behavior="scroll">ENVIOS GRATIS A PARTIR DE $5.000</marquee>
        <div className="contenedor-header">
         <div className="logo">
          <a href="/">
          <img src={logo} alt="logo de Tienda Argenta" />
          </a>
         </div>
        <div className="icons">
          <form /* action="/busqueda" */ method="get">
            <input type="search" name="search" placeholder="Buscar"/>
          </form>
          
          <a className href="/usuario/perfil"></a>
            
          <a href="/usuario/login"><img src="/assets/home/header/Login.png" alt="imagen de login con gorrito"/></a>
          
          <a className href="/productos/carrito">
          <img src="/assets/home/header/carrito_png.png" alt="carrito de compras con bandera argentina"/>
          </a>
        </div>
        <div className="burger">
          <input type="checkbox" name="burger" id="burger" onClick={menuHamburguesa}/>
          <label htmlFor="burger" ><i className="fas fa-bars"></i></label>
      
        <nav className="nav-desktop">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a>Productos&nbsp;<i className="fas fa-angle-down"></i></a>
              <ul>
                <li><a href="/productos/cotillon">Cotillon</a></li>
                <li><a href="/productos/coleccionables">Coleccionables</a></li>
                <li><a href="/indumentaria">Indumentaria&nbsp;<i className="fas fa-angle-down"></i></a>
                  <ul>
                    <li><a href="/productos/hombre">Hombre</a></li>
                    <li><a href="/productos/mujer">Mujer</a></li>
                    <li><a href="/productos/infantil">Infantil</a></li>
                  </ul>
                </li>
              </ul>
            </li>
              <li><a href="/novedades">Novedades</a></li>
              <li><a href="/contacto">Contacto</a></li>                
              <li><a href="/usuario/perfil">Mi Perfil</a></li>
              <li><a href="/admin/listar">Admin</a></li>
              <li>
                <form className="cSession" /* action="/usuario/logout?_method=DELETE"  */method="post">
                  <button className="cSession" type="submit">Cerrar sesión</button>
                </form>
              </li>     
            </ul>
         </nav>
        </div>
      </div>
      </header>
    </div>
  )
}

export default Header