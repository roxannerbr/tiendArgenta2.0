import React from 'react';
import { NavLink } from 'react-router-dom';
//import { AboutUs } from '../about/AboutUs';
//import Map from '../Map';



function Footer() {

    /* redireccion productos */
    const handleClick = (e) => {
        e.preventDefault()
        console.log('hiciste click');
    }

  return (
    <div>
        <footer>
          <div className="hilera primer">
              <div className="columnas links">
                  <ul>
                      <li><i className="fas fa-home"><NavLink to={"/"}>INICIO</NavLink></i></li>
                      <li><i className="fas fa-trophy"><NavLink to={"/"}  /* onClick={handleClick}  */>PRODUCTOS</NavLink></i></li>
                      <li><i className="fas fa-rss"><NavLink to={"/novedades"}>NOVEDADES</NavLink></i></li>
                      <li><i className="fas fa-envelope"><NavLink to={"/contacto"}>CONTACTO</NavLink></i></li>
                      <li><i className="fas fa-newspaper"><a href="https://www.ole.com.ar/seleccion/" target="_blank">NOTICIAS</a></i></li>
                      <li><i className="fas fa-question-circle"><NavLink to={"/pregFrecuentes"}>PREGUNTAS FRECUENTES</NavLink></i></li>
                  </ul>
              </div>
              <div className="columnas about">
                   {/* <AboutUs></AboutUs> */}
              </div>
              <div className="columnas links">
                  <h6>LOCALES</h6>
                  <ul>
                      <li> <i className="fas fa-map-marker-alt"><a href="https://goo.gl/maps/4E5Zar7nWi8YCZkK6" target="_blank">Viamonte 1366, CABA</a></i></li>
                      <li> <i className="fas fa-map-marker-alt"><a href="https://goo.gl/maps/985ZB6jJi1JSJvyFA" target="_blank">Brandsen 805, CABA</a></i></li>
                      <li> <i className="fas fa-map-marker-alt"><a href="https://goo.gl/maps/ASpENfYAkSSafL6T7" target="_blank">Av. Figueroa Alcorta 7597, CABA</a></i></li>
                  </ul>
                  <br />
                  <h6>¡SEGUINOS EN NUESTRAS REDES!</h6>
                  <div className="redes">
                      <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                      <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram-square"></i></a>
                      <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a>
                      <a href="https://www.whatsapp.com/" target="_blank"><i className="fab fa-whatsapp-square"></i></a>
                  </div>
              </div>
          </div>
          <small> &#169; Copyright 2022 &#8212; TiendArgenta.com.ar &#8212;</small>
      </footer>

      <script src="/javascript/glider.js"></script>
      <script src="/javascript/productos.js"></script>
    </div>
  )
}

export default Footer