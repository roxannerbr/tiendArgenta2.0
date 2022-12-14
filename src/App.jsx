import React/* ,{useState} */ from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

/* admin */
import Admin from "./components/admin/Admin";
import CreacionProducto from "./components/admin/CreacionProducto";
import Form from "./components/admin/Form"
import FormEdit from "./components/admin/FormEdit"

/* partials */
import Header from "./components/partials/Header";
import Main from "./components/home/Main";
//import Cards from "./components/partials/Cards";
import Footer from "./components/partials/Footer";
import Contacto from "./components/Contacto";

/* productos */
import Cotillon from "./components/productos/Cotillon";
import Coleccionables from "./components/productos/Coleccionables";
import Indumentaria from "./components/productos/Indumentaria";
import Hombre from "./components/productos/Hombre";
import Mujer from "./components/productos/Mujer";
import Niños from "./components/productos/Niños";
import Novedades from "./components/home/Novedades";
import ProductosCopy from "./components/admin/ProductosCopy";
//import Detalles from "./components/Detalles";

/* user */
//import Busqueda from "./components/Busqueda";
import Register from "./components/Register";
import Login from "./components/Login";
import Usuario from "./components/Usuario";
import EditarUsuario from "./components/EditarUsuario";

/* extras */
import Error from "./components/Error";
import Carrito from "./components/Carrito";
import PregFrecuentes from "./components/PregFrecuentes";

/* styles */
import "./styles/styles.css"


function App() {
  //const [main, ] = useState(true)
  //const [indumentaria,setIndumentaria] = useState([])
  //const [Hombre,setHombre] = useState([])

  return (
    <div >
      <BrowserRouter>

      <Header></Header>
      {/* <Cards></Cards> */}
      
      <Routes>
        {/* home */}
        <Route path='/' element={<Main/>}/>

        {/* admin */}
        <Route path="/admin" element={<Admin/>}/>
        {/* <Route path="/admin/lista" element={<Lista/>}/> */}
        <Route path="/admin/crear/:categoria" element={<Form/>}/>
        <Route path='/admin/productos' element={<CreacionProducto/>}/>
        <Route path='/admin/crear/:categoria' element={<CreacionProducto/>}/> 
        <Route path='/admin/editar/:categoria/:id' element={<FormEdit />}/> 
        <Route path='/admin/productosCopy' element={<ProductosCopy/>}/>             

        {/* novedades */}
        <Route path='/Novedades' element={<Novedades/>}/>

        {/* contacto */}
        <Route path='/Contacto' element={<Contacto/>}/>

        {/* productos */}
        {/*    <Route path='/detalles' element={<Detalles/>}/> */}
        <Route path='/productos/cotillon' element={<Cotillon/>}/>
        <Route path='/productos/coleccionables' element={<Coleccionables/>}/>
        <Route path='/productos/indumentaria' element={<Indumentaria/>}/>
        <Route path='/productos/hombre' element={<Hombre/>}/>
        <Route path='/productos/mujer' element={<Mujer/>}/>
        <Route path='/productos/infantil' element={<Niños/>}/>

        {/* usuario */}
        <Route path='/usuario/login' element={<Login/>}/>
        <Route path='/usuario/register' element={<Register/>}/>
        <Route path='/usuario/editarUsuario' element={<EditarUsuario/>}/>
        <Route path='/usuario/perfil' element={<Usuario/>}/>

        {/* carrito */}
        <Route path='/productos/carrito' element={<Carrito/>}/>

        {/* pregfrec */}
        <Route path='/pregfrecuentes' element={<PregFrecuentes/>}/>

        {/* error */}
        <Route path='/error' element={<Error/>}/>

        
      </Routes>

      <Footer/> 

      </BrowserRouter>
    
    </div>
  );
}

export default App;
