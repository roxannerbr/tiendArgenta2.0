import React/* ,{useState} */ from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

/* admin */
import Admin from "./components/admin/Admin";
//import Admin1 from "./components/admin/Admin1";
import CreacionProducto from "./components/admin/CreacionProducto";
import Formulario from "./components/admin/Formulario"
import FormularioEdicion from "./components/admin/FormularioEdicion"

/* partials */
import Header from "./components/partials/Header";
import Main from "./components/home/Main";
//import Cards from "./components/partials/Cards";
import Footer from "./components/partials/Footer";
import Listar from './components/admin/Listar';


import Contacto from "./components/Contacto";

/* productos */
import ProductosCopy from "./components/admin/ProductosCopy";
import Cotillon from "./components/productos/Cotillon";
import Coleccionables from "./components/productos/Coleccionables";
import Indumentaria from "./components/productos/Indumentaria";
import Hombre from "./components/productos/Hombre";
import Mujer from "./components/productos/Mujer";
import Niños from "./components/productos/Niños";
import Novedades from "./components/home/Novedades";
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
        <Route path='/admin/listar' element={<Listar/>}/>

        {/* admin */}
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/crear/:categoria" element={<Formulario/>}/>
        <Route path='/admin/productos' element={<CreacionProducto/>}/>
        <Route path='/admin/productos/:id' element={<CreacionProducto/>}/> 
        <Route path='/admin/editar/:categoria/:id' element={<FormularioEdicion />}/>              

        {/* novedades */}
        <Route path='/Novedades' element={<Novedades/>}/>

        {/* contacto */}
        <Route path='/Contacto' element={<Contacto/>}/>

        {/* productos */}
        <Route path='/admin/productos' element={<ProductosCopy/>}/>
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
