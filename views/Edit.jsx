import React, { useState } from 'react'
import DefaultLayout from './Defaultlayout'


const pokeShow ={
  width: '1280px',
  margin: "0 auto",
  zIndex: '0',
  top: '60px',
  position: 'relative',
  display: 'flex',
  justifyContent:'space-between',
  height: '500px',
  zIndex: '1',
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
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#585858'
} 

const pokeNameDiv ={
border: '1px solid black',
borderRadius: '10px',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
gap: '5px',
backgroundColor: '#fe5858'
}

const pokeInfo ={
border: '1px solid black',
borderRadius: '10px',
display:'flex',
flexDirection: 'column',
alignItems: 'center',
backgroundColor: '#585858'
}

const btn = {
display:'flex',
textAlign:'center',
border: '1px solid black',
borderRadius: '10px',
padding: '15px',
justifyContent: 'center',
alignItems: 'center',
textDecoration: 'none',
height:'52px',
width: '136px',
cursor: 'pointer',
fontSize: '1em',
backgroundColor: '#fe5858',
 color: '#ffffff'
}

const urlInput = {
   border: 'none',
   width: '80%',
   height: '30px',
   fontSize: '0.9em',
   border: '1px solid black',
   borderRadius: '10px',
   backgroundColor: '#fe5858',
   color: 'lightgoldenrodyellow'
}

const nameInput ={
  fontStyle: 'bold',
  fontSize: '2em',

  border: '1px solid black',
  borderRadius: '10px',
  color: 'lightSalmon'
}

const updateBtn ={
  width: '1280px',
  margin: "0 auto",
  display: 'flex',
  justifyContent:'center',
  zIndex: '1',
  gap: '30px'
}

const cancelBtn = {
  textDecoration: 'none',
  height: '52px',
  width: '136px',
  display: 'flex',
  fontSize: '1em',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '10px',
  color: 'black',
  backgroundColor: '#585858',
  color: '#fefefe'
}

const textDes  = {
  fontSize: '1.5em',
 width:'90%' , 
 padding: '0 1em 1em 1em',
  marginBottom:'0', 
  borderRadius: '10px', 
  fontStyle: 'italic',
}

const Edit = ({pokemon}) => {
  const [poke ,setPoke]=useState({
    name: pokemon.name,
    img: pokemon.img,
    description: pokemon.description
  })


  return (
    <DefaultLayout>
     <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="post">
     <div style={{display:'flex', flexDirection:'column'}}>
     <div style={pokeShow}>
     <div style={pokeImgEdit}>
      <div style={pokeImg}>
       <img style={{width:'382px',height:'310px' }} src={`${poke.img}`} onChange={(e) => {setPoke({ ...poke, img: e.target.value})}}/>
      </div>
     <div style={pokeBtn}>
        <h3 style={{margin: '0', color:'#ffffff'}}>Edit Url:</h3>
        <input style={urlInput} type="text" name="img" defaultValue={poke.img} onChange={(e) => {setPoke({ ...poke, img: e.target.value})}}/>
     </div>
     </div>
     <div style={pokeDes}>
     <div style={pokeNameDiv}>
     <h1 style={{color:'lightgoldenrodyellow'}}>Edit Name:</h1>
     <input style={nameInput} type="text" name="name" defaultValue={poke.name.toUpperCase()} onChange={(e) => {setPoke({ ...poke, name: e.target.value})}}/>
     </div> 
     <div style={pokeInfo}>
     <h1 style={{margin: '0', color:'#fe5858'}}>Edit Description:</h1>
    <textarea style={textDes} name='description' rows={10} defaultValue={poke.description} onChange={(e) => {setPoke({ ...poke, description: e.target.value})}}></textarea>
     </div>
     </div>
    </div>
    <div style={updateBtn}>
     <input style={btn} type="submit" name="" defaultValue="Update Pokemon" />
     <a style={cancelBtn} href={`/pokemon/${pokemon.id}`}>Cancel</a>
     </div>
     </div>
    </form>
    </DefaultLayout>
  )
}

export default Edit