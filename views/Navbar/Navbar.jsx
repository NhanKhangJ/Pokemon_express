import React from 'react'


const pokeNav ={
    display: 'flex',
    justifyContent: 'start',
    backgroundColor: '#fe606A',
    borderRadius: '5px',
    width: '1280px',
    margin: '0 auto',
    position: 'fixed',
    alignSelf: 'center',
    zIndex: '2',
    border: '1px solid black',
  }
  
const Navbar = () => {
  return (
    <>
    <nav style={pokeNav}>
      <h1 style={{marginLeft:'20px'}}><a style={{ textDecoration:'none', color:'#ffffff'}} href='/pokemon'>POKEMON CRUD</a></h1>
    </nav>
    <br></br>
    </>
  )
}

export default Navbar