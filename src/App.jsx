import Header from "./components/Header";
import Main from "./components/Main";
//import SimplyCountdown from "simplycountdown";
//import SimplyCountdown.min from "./components/SimplyCountdown.min
import Article from "./components/Article";
import Footer from "./components/Footer";


import "./styles/normalize.css"
import "./styles/general.css"
import "./styles/variables.css"
import "./styles/glider.css"
import "./styles/header.css"
import "./styles/footer.css"
import "./styles/home.css"
//import "./styles/register.css"
//import "./styles/login.css"
import "./styles/cards.css"
//import "./styles/carrito.css"
//import "./styles/detalles.css"
//import "./styles/contacto.css"
import "./styles/busqueda.css"
//import "./styles/error.css"
//import "./styles/indumentaria.css"
//import "./styles/crear-editar.css"
//import "./styles/listar.css"
//import "./styles/usuario.css"


function App() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Article />
      <Footer />      
    </div>
  );
}

export default App;
