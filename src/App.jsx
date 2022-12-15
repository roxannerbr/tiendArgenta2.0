import React/* ,{useState} */ from "react";
import {Route, BrowserRouter, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

/* admin */
import Admin from "./components/admin/Admin";
//import AdminTable from "./components/admin/AdminTable";

/* partials */
import Header from "./components/partials/Header";
import Main from "./components/home/Main";
import Cards from "./components/partials/Cards";
import Footer from "./components/partials/Footer";
import Contacto from "./components/Contacto";

/* productos */
import Productos2 from "./components/productos/Productos2";
import Cotillon from "./components/productos/Cotillon";
import Coleccionables from "./components/productos/Coleccionables";
import Indumentaria from "./components/productos/Indumentaria";
import Hombre from "./components/productos/Hombre";
import Mujer from "./components/productos/Mujer";
import Niños from "./components/productos/Niños";
import Novedades from "./components/home/Novedades";
import Formulario from "./components/admin/Formulario";
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
         <Route path="/admin" element={<Admin/>}></Route>
         {/* <Route path="/admin" element={<AdminTable/>}></Route>  */}
        <Route path="/admin/crear/:categoria" element={<Formulario/>}></Route>

        {/* novedades */}
        <Route path='/Novedades' element={<Novedades/>}/>

        {/* contacto */}
        <Route path='/Contacto' element={<Contacto/>}/>

        {/* productos */}
        <Route path='/Productos' element={<Productos2/>}/>
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

        {/* busqueda */}
       {/*  <Route path='/busqueda' element={<Busqueda/>}/> */}

      </Routes>

      <Footer/> 

      </BrowserRouter>
    
    </div>
  );
}

export default App;
