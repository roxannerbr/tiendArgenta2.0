import React from 'react'
import Categoria from './Categoria'

function Productos2() {

    let categorias= [
        {
            id: 1,
            imagen: "Kit-Glitter.png",
            titulo: "kit glitter",
            alt: "brillando"
        },
        {
            id: 2,
            imagen: "Col-Messi.png",
            titulo: "coleccion",
            alt: "coleccionandoando"
        },
        {
            id: 3,
            imagen: "H-titular.png",
            titulo: "rmera hombre",
            alt: "indumentaria"
        }
    ]


  return (
    <div>
        <main className='productos2'>
            <section className='cat'>

                {
                    categorias.map(categoria=>
                        <Categoria
                        id={categoria.id}
                        imagen={categoria.imagen}
                        titulo={categoria.titulo}
                        alt={categoria.alt}
                        />
                    )
                }
                {/* <div className='categoria'>
                    <label htmlFor="cotillon"><img src={`/assets/productos/Kit-Glitter.png`}  alt=""/></label>
                    <input type="checkbox" name='cotillon' id='cotillon'/>
                </div>
                <div className='categoria'>
                    <label htmlFor="coleccionables"><img src={`/assets/productos/Col-Messi.png`}  alt=""/></label>
                    <input type="checkbox" name='coleccionables' id='coleccionables'/>
                </div>
                <div className='categoria'>
                    <label htmlFor="indumentaria"><img src={`/assets/productos/H-titular.png`}  alt=""/></label>
                    <input type="checkbox" name='indumentaria' id='indumentaria'/>
                </div> */}
            </section>
        </main>
    </div>
  )
}

export default Productos2