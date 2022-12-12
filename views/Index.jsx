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
            
            <li key={i}>
            <a href={`pokemon/${i}`}>{pokemon.name}</a>
            </li>
            )
         })}
       </ul>
    </div>
  )
}

export default Index