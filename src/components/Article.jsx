import React from 'react'

function article({id,imgPrincipal,titulo}) {
  return (
    <div>
      <article className="card card1">
          <div className="contenedor">
            <a href={`/indumentaria/${id}`}><img src={`/assets/${imgPrincipal}`} alt={titulo}/></a>
          </div>
          <div className="nombre">
            <h2>{titulo}</h2>
          </div>
        </article>
    </div>
  )
}

export default article