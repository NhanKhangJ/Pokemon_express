import React from 'react'
import DefaultLayout from './DefaultLayout'

const pokeShow ={
    width: '1280px',
    margin: "0 auto",
    zIndex: '0',
    top: '60px',
    position: 'relative',
    display: 'flex',
    justifyContent:'space-between',
    height: '100vh'
}

const pokeImgEdit ={
  width: '30%',
  height: '400px',
  display: 'grid',
  gridTemplateRows: ' 4fr 1fr',
  gap: '10px'
}

const pokeDes ={
  width: '68%',
  height: '400px',
  display: 'grid',
  gridTemplateRows: ' 1fr 4fr',
  gap: '10px'
}
const pokeImg = {
  border: '1px solid black',
    borderRadius: '10px',
    display: 'flex',
  
}

const pokeBtn  ={
  border: '1px solid black',
    borderRadius: '10px',
    display:'flex',
    justifyContent: 'space-around',
    backgroundColor: '#585858'
} 

const pokeNameDiv ={
  border: '1px solid black',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fe5858'
}

const pokeInfo ={
  border: '1px solid black',
  borderRadius: '10px',
}

const btn = {
  display:'flex',
  textAlign:'center',
  border: '1px solid black',
  borderRadius: '10px',
  width: '40%',
  margin: '15px',
  padding: '4px',
justifyContent: 'center',
 alignItems: 'center',
 textDecoration: 'none',
 backgroundColor: '#fe5858',
 color: '#ffffff'
}

const btn2 = {
  display:'flex',
  textAlign:'center',
  border: '1px solid black',
  borderRadius: '10px',
  width: '40%',
  margin: '15px',
  padding: '4px',
justifyContent: 'center',
 alignItems: 'center',
 textDecoration: 'none',
 backgroundColor: '#ffffff',
 color: '#fe5858'
 
}

const Show = ({pokemon}) => {
  return (
    <DefaultLayout>
    <div style={pokeShow}>
     <div style={pokeImgEdit}>
      <div style={pokeImg}>
       <img style={{width:'382px',height:'310px', borderRadius:'10px' }} src={`${pokemon.img}`} />
      </div>
     <div style={pokeBtn}>
      <a  style={btn} href={`/pokemon/${pokemon.id}/edit`}>EDIT</a>
      <a style={btn2} href='/pokemon'>BACK</a>
     </div>
     </div>
     <div style={pokeDes}>
     <div style={pokeNameDiv}>
      <h1 style={{margin: '0', color:'lightgoldenrodyellow'}}>{pokemon.name.toUpperCase()}</h1>
     </div> 
     <div style={pokeInfo}>
     <p style={{fontSize: '1.5em', padding: '1em', fontStyle:'italic'}}>{pokemon.description}</p>
     </div>
     </div>
    </div>
    </DefaultLayout>
  )
}

export default Show