import Header from "./components/Header";
import Main from "./components/Main";
import Article from "./components/Article";
import Footer from "./components/Footer";
//import Countdown1 from "./components/Countdown1";
//import Busqueda from "./components/Busqueda";
//import Register from "./components/Register";
//import Login from "./components/Login";
//import Usuario from "./components/Usuario";
//import EditarUsuario from "./components/EditarUsuario";
//import Error from "./components/Error";
//import Novedades from "./components/Novedades";
//import Indumentaria from "./components/Indumentaria";
//import Carrito from "./components/Carrito";
//import Productos from "./components/Productos";
//import Detalles from "./components/Detalles";
//import Contacto from "./components/Contacto";
//import PregFrecuentes from "./components/PregFrecuentes";




import "./styles/normalize.css"
import "./styles/general.css"
import "./styles/variables.css"
import "./styles/glider.css"
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/home.css"
import "./styles/register.css"
import "./styles/login.css"
import "./styles/cards.css"
import "./styles/carrito.css"
import "./styles/detalles.css"
import "./styles/contacto.css"
import "./styles/busqueda.css"
import "./styles/error.css"
import "./styles/indumentaria.css"
import "./styles/crear-editar.css"
import "./styles/listar.css"
import "./styles/usuario.css"


function App() {
  return (
    <div className="home">
      <Header />
      <Main />
      {/* <Countdown1></Countdown1> */}
      <Article />
      <Footer />      
      {/* <Busqueda/> */}
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Usuario></Usuario> */}
      {/* <Novedades></Novedades> */}
      {/* <Error></Error> */}
      {/* <Indumentaria></Indumentaria> */}
      {/* <Carrito></Carrito> */}
      {/*  <Productos></Productos> */}
      {/* <Detalles></Detalles> */}
      {/* <Contacto></Contacto> */}
      {/* <EditarUsuario></EditarUsuario> */}
      {/* <PregFrecuentes></PregFrecuentes> */}
    </div>
  );
}

export default App;
