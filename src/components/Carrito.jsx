import React from 'react'

function Carrito() {
  return (
    <div>
      <body className="carrito">
      <main className="buy">
        <section className="radio">
          <label htmlFor="anonimo">Continuar como anónimo</label>
          <input className="select" type="radio" name="seleccion"/>
          <label  htmlFor="cuenta" className="cuenta-text">Conectarse a una cuenta</label>
          <input className="select" type="radio" name="seleccion"/>
        </section>
        <section className="submit">
          <p className="cuenta">La creación de una cuenta implica que pueda comprar más deprisa, mantenerse al dia sobre el proceso de la orden actual y comprobar el estado de ordenes anteriores.</p>
          <div className="email">  
            <label hstmlFor="email"></label>
            <input type="text" name="email" id="email" placeholder="ingrese su e-mail"/>
          </div>        
            
        <button className="registrarse" type="submit"><a href="/usuario/register">Registrarme</a></button>
        </section>
        <h4>Resumen de compra</h4>
        <div className="compra">
          <section className="product">
            <article>      
              <div>
                <img src="/images/productos/Inf-titular.png" alt="producto seleccionado"/>
              </div>
              <div className="detalle">
              <h3>Camiseta Infantil</h3>  
              <div className="precio">            
                <p className="secundario">$8000</p>
                <p className="descuento">25%</p>
                <p className="principal">$6000</p>
              </div>
              </div>
              <div className="agregarCarrito">
                  <button className="button button--addOnLeft">-</button>
                  <input type="number" value="1" className="agregarCarrito__input"/>
                  <button className="button button--addOnRight">+</button>
              </div>
              <div className="botones">
                <button type="reset"><i className="fa-solid fa-trash-can"></i></button>
                <button><i className="fa-solid fa-pen-clip"></i></button>
              </div>
            </article>
            <article>      
              <div>
                <img src="/assets/productos/M-titular.png" alt="producto seleccionado"/>
              </div>
              <div className="detalle">
              <h3>Camiseta Mujer</h3> 
              <div className="precio">              
                <p className="secundario">$16000</p>
                <p className="descuento">25%</p>
                <p className="principal">$12000</p>
              </div>
              </div>
              <div className="agregarCarrito">
                  <button className="button button--addOnLeft">-</button>
                  <input type="number" value="1" className="agregarCarrito__input"/>
                  <button className="button button--addOnRight">+</button>
              </div>
              <div className="botones">
                <button type="reset"><i className="fa-solid fa-trash-can"></i></button>
                <button><i className="fa-solid fa-pen-clip"></i></button>
              </div>
            </article>     
            <article>
              <div>
                <img src="/assets/productos/Col-Messi.png" alt="producto seleccionado"/>
              </div>
              <div className="detalle">
              <h3>Figura Messi 3D</h3>  
              <div className="precio">             
                <p className="secundario">$2000</p>
                <p className="descuento">25%</p>
                <p className="principal">$1500</p>
              </div>
              </div>
              <div className="agregarCarrito">
                  <button className="button button--addOnLeft">-</button>
                  <input type="number" value="1" className="agregarCarrito__input"/>
                  <button className="button button--addOnRight">+</button>
              </div>
              <div className="botones">
                <button type="reset"><i className="fa-solid fa-trash-can"></i></button>
                <button><i className="fa-solid fa-pen-clip"></i></button>
              </div>
            </article>
          </section>
          <div className="total">
            <section className="resumen">
              <table>
                <thead>
                  <tr>
                    <th>PRODUCTO</th><th>PRECIO</th>
                  </tr>
                </thead>
                <tr>
                  <td>Camiseta Infantil</td><td>$8000</td>
                </tr>
                <tr>
                  <td>Camiseta Mujer</td><td>$16000</td>
                </tr>
                <tr>
                  <td>Figura Messi 3D</td><td>$2000</td>
                </tr>
              </table>
              <div className="linea"></div>
              <table>
                <tr>
                  <td>SUBTOTAL</td><td>$26000</td>
                </tr>
              </table>
              <br/>
              <table>
                <tr>
                  <td>Descuento</td><td>$6500</td>
                </tr>
                <tr>
                  <td>Intereses</td><td>$0</td>
                </tr>
                <tr>
                  <td>Envío</td><td>$0</td>
                </tr>
              </table>
              <div className="linea"></div>
              <table>
                <tr>
                  <td><strong>TOTAL</strong></td><td><strong>$19500</strong></td>
                </tr>
              </table>
            </section>
            <div className="codigo">
              <label className="promo" for="codigo">Agregar un código de promoción</label>
              <input type="text" name="codigo" id="codigo" placeholder="Ingrese su código"/>
              <button className="cdgo">Aplicar promoción</button>
            </div> 
            <div className="compraFinal">
              <button className="btnfinal"><a href="/">Seguir comprando</a></button>
              <button className="btnfinal"><a href="/usuario/usuario">Finalizar compra</a></button>
            </div>
            
          </div>
      </div>
    </main>
    </body>

    </div>
  )
}

export default Carrito
    