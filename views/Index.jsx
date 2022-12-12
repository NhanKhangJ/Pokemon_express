import React from 'react'


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };
const Index = ({pokemons}) => {
  return (
    <div style={myStyle}>
       <ul>
         {pokemons.map((pokemon, i)=>{ 
            return(
            <li key={i}>{pokemon.name}</li>
            )
         })}
       </ul>
    </div>
  )
}

export default Index