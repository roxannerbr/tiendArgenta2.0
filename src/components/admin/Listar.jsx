import React from 'react'
//import Productos2 from '../productos/Productos2'

function Listar() {     

  <main className="listar">
  <h1>Administracion</h1>
  <div className="btnHeader">
    <div className="btncrear">
      <a href="/admin/crear">
          <button type="button" className="btn crear">Crear Producto</button>
      </a>
    </div>
    <div className="btncrear">
      <a href="/admin/crear">
        <button type="button" className="btn crear"></button>
      </a>
    </div>
  </div>
  <div className="table-responsive tabla-mob">
  <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Categoria</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Desc</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody> 
        
          <tr>
            <th scope="row"><a href="/admin/editar/id">producto</a></th>
            <td><a href="/admin/editar/id>"> titulo </a></td>
            <td><a href="/products/detail/id"> categoria</a></td>
            <td><a href="/admin/editar/id"> stock</a></td>
            <td><a href="/admin/editar/id">$precio </a></td>
            <td><a href="/admin/editar/id" > descuento %</a></td>
            <td className="btnMod">                
              
                 if (redirection !== "listar") {
                  <a href="/admin/editar/id">
                    <button type="edit" className="btn btn-success"><i className="fas fa-edit"></i></button>
                </a>
                }else{ 
                  <form action="/admin/restore/id" method="DELETE" post>
                    <button type="submit" className="btn btn-success"><i className="fa-solid fa-arrow-rotate-left"></i></button>
                  </form>
                } 
                 if (redirection !== "listar") { 
                  <form action="/admin/destroy/id" _method="DELETE" post>
                    <button type="submit" className="btn btn-danger"><i className="fas fa-trash"></i></button>
                  </form>
                 }else{
                  <form className="danger" action="/admin/crash/id" _method="DELETE" post>
                    <button type="submit"  className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                  </form>
                 } 
            </td>
          </tr>              
      </tbody>        
    </table>
  </div>
</main>
}

export default Listar
