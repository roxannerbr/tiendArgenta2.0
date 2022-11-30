import React from 'react'
import PropTypes from 'prop-types'

function Article2({id,imgPrincipal,titulo}) {
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

Article2.propTypes = {
  id: PropTypes.number,
  imgPrincipal: PropTypes.string,
  titulo: PropTypes.string
}
Article2.defaultProps={
  id: '0',
  imgPrincipal: 'default-image.png',
  titulo: 'Lorem, ipsum dolor.'
}

export default Article2
