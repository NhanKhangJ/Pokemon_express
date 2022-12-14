import React, { useState } from 'react'

const Edit = ({pokemon}) => {
//   const [poke ,setPoke]=useState({
//     name: pokemon.name,
//     img: pokemon.img
//   })


  return (
    <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="post">
          Name: <input type="text" name="name" defaultValue={pokemon.name}/><br/>
          Image Url: <input type="text" name="img" defaultValue={pokemon.img} /><br/>
          <input type="submit" name="" defaultValue="Update Pokemon"/>
    </form>
  )
}

export default Edit