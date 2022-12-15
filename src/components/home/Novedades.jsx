import React,{useState, useEffect} from 'react'
//import PropTypes from 'prop-types'
import Cards from '../partials/Cards'

function Novedades() {

  const [novedades, setNovedades] = useState([]) 
  const [loading,setLoading] = useState(true)


  useEffect(() => {
    fetch("http://localhost:3012/api/productos")
    .then((response) => response.json())
    .then((valores) => {
      setNovedades(valores.data);
      setLoading(false)
    })
    .catch(error => console.log(error))
  }, [loading])
  
  console.log(novedades)

  if (loading){
    return(
        <div>
            ...cargando
        </div>
    )
  }
 
  return (
    <div>
      
      <body className="novedades">
  
  <main>
     <h1 className="productsPage">NOVEDADES</h1>      
    <section className="cardProduct"> 

    {/* <img src={producto} alt="" />   */}

      {novedades.cards.map(card =>
          <Cards
          titulo= {card.titulo}
          precio= {card.precio}
          descuento= {card.descuento} 
          imagen= {card.imagen !== null ? card.imagen : "default-image.png"}
          />
        )}     
           
    </section>
  </main>
  
</body>

    </div>

    
  )
}

export default Novedades

