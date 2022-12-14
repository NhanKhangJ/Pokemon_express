import React from 'react'


const myStyle = {
    color: 'green',
    backgroundColor: '#ffffff',
    display: 'flex',
    padding: '5px  1rem 5px 1rem',
  

};
const pokeDiv = {
  width: '200px',
  textAlign: 'center',
  borderRadius: '10px',
  border:'2px solid black',
  margin: '5px'
}

const pokename ={
  textDecoration: 'none'
}

const pokeImage={
  width: '200px',
  height: ' 155px'
}

const pokeNav ={
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'green',
  borderRadius: '5px'
}

const mainPage= {
  width: '1280px',
  margin: "0 auto"
}

const pokeButton ={
  display: 'flex',
  justifyContent: 'space-around'
}
const pokeCollect ={
  textAlign: 'center'
}

const Index = ({pokemons}) => {
  return (
    <div style={mainPage}>
    <nav style={pokeNav}>
      <h1>CRUD POKEMON</h1>
      <a style={{ textDecoration: 'none'}} href='/pokemon/new'>Add Pokemon</a>
    </nav>
    <br></br>
    <div style={pokeCollect}>
    <h1>Your collection</h1>
    <div style={myStyle}>
         {pokemons.map((pokemon, i)=>{ 
            return(
            <div style={pokeDiv} key={i}>
            <h1>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</h1>
            <img style={pokeImage} src={`${pokemon.img}`}></img>
            <hr />
            <p>Lorem ipsum quas lorepsad</p>
            <div style={pokeButton}>
            <button><a style={pokename} href={`pokemon/${pokemon._id}`}>Details</a></button>
            <form action={`/pokemon/${ pokemon._id }?_method=DELETE`} method="POST">
            <button type="submit" value='Delete'>Delete</button>
            </form>
            </div>
            </div>
            )
         })}
     </div>
     <footer></footer>
    </div>
   </div>
  )
}

export default Index