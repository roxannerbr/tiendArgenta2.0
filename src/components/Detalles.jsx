import React from 'react'

function Detalles() {
  return (
    <div>
      <body className="detalles">
  <main>
      <h1></h1>
      <div className="desk">
        {/* //imagen del producto */}
        <section className="imagenes">
          <div className="img_principal">
            <img src="/assets/productos" alt="" />
          </div>
        </section>
        {/* datos del producto */}
        <section className="descripcion">
          <div className="contDescripcion">
          <div className="desc">
            <h4>Descripcion del producto</h4>
            <p>
            </p>
          </div>
          </div>
          {/* <div className="talles">
            <h4>Talles</h4>
            <label htmlFor="select">
              <select name="talles" id="talles">
                <option value="">S</option>
                <option value="">M</option>
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">XXL</option>
                <option value="">XXXL</option>
              </select>
            </label>
            <h4>Stock:</h4>
          </div> */}
          <div className="agregarCarrito">
            <h4>Cantidad</h4>
              <button className="button button--addOnLeft">-</button>
              <input type="text" placeholder="Stock" value="1" className="input agregarCarrito__input"/>
              <button className="button button--addOnRight">+</button>
          </div>
            <div className="linea"></div>
          <div className="envio">
            <h3><i className="fa fa-truck"></i>Envíos a todo el país</h3>
            <a href="https://www.correoargentino.com.ar/" target="_blank">Ver costo de envío</a>
          </div>
          <div className="linea"></div>
          <div className="precio">
            <div className="contPrice">
              <h4>Precio</h4>
              <div className="precioViejo">
                <small>$3000</small>
                <h4></h4>
              </div>
            </div>
            <div className="contPrice">
              <h4>Descuento</h4>
              <h5>15%</h5>
            </div>
          </div>
          <div className="linea"></div>
          <div className="totalFinal">
            <h4>Total</h4>
            <h4>$2955</h4>
          </div>
          <div className="btnComprar">
            <button type="submit"><a href="/productos/carrito">AÑADIR AL CARRITO</a></button>
          </div>
          </section>
        </div>

      <h1>Productos relacionados</h1>
      <section className="carrouselProductos">
        <div className="glider-contain">
            <div className="glider">
              
              {/*  include('./partials/cards',{
                  id: producto.id,
                  imagen: producto.imagenes[0].nombre,
                  titulo: producto.titulo,
                  descuento: producto.descuento,
                  precio: producto.precio
              })  */}
         
            </div>
          
            <button aria-label="Previous" className="glider-prev"><i className="fas fa-chevron-left"></i></button>
            <button aria-label="Next" className="glider-next"><i className="fas fa-chevron-right"></i></button>
          </div>
    </section>       
  </main>  
</body>

    </div>
  )
}

export default Detalles


