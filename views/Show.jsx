import React from 'react'

const Show = ({pokemon}) => {
  return (
    <div>
     <h1>Gotta Catch 'Em All</h1>
     <h2>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</h2>
     <img src={`${pokemon.img}`} />
     <button><a href={`/pokemon/${pokemon.id}/edit`}>Edit</a></button>
     <a href='/pokemon'>Back</a>
    </div>
  )
}

export default Show