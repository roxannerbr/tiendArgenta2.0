import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
          <div className="hilera primer">
              <div className="columnas links">
                  <ul>
                      <li><i className="fas fa-home"><a href="/">INICIO</a></i></li>
                      <li><i className="fas fa-trophy"><a href="#">PRODUCTOS</a></i></li>
                      <li><i className="fas fa-rss"><a href="/novedades">NOVEDADES</a></i></li>
                      <li><i className="fas fa-envelope"><a href="/contacto">CONTACTO</a></i></li>
                      <li><i className="fas fa-newspaper"><a href="https://www.ole.com.ar/seleccion/" target="_blank">NOTICIAS</a></i></li>
                      <li><i className="fas fa-question-circle"><a href="/pregFrecuentes">PREGUNTAS FRECUENTES</a></i></li>
                  </ul>
              </div>
              <div className="columnas about">
                  {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.557944164106!2d-58.395053169068795!3d-34.60063418736252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac708c492db%3A0xd382ce07c0e451c0!2sAsociaci%C3%B3n%20del%20F%C3%BAtbol%20Argentino!5e0!3m2!1ses-419!2sar!4v1657577299170!5m2!1ses-419!2sar"
                      width="100%"
                      height="200"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                  >Viamonte 1366</iframe> */}
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