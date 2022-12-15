import React from 'react'
import DefaultLayout from './DefaultLayout'
import New from './New';


const myStyle = {
    backgroundColor: '#fe5858',
    display: 'flex',
    padding: '5px  1rem 5px 2.3rem',
    justifyContent: 'start',
    border: '1px solid black',
    borderRadius: '10px',
    margin: '0 15px 6px 15px',
    flexWrap : 'wrap'
};

const display = {
  backgroundColor: '#fe5858',
  display: 'flex',
  padding: '5px  1rem 5px 2.3rem',
  justifyContent: 'start',
  border: '1px solid black',
  borderRadius: '10px',
  margin: '0 15px 6px 15px',
  flexWrap : 'wrap',
  display: 'none'
}

const pokeDiv = {
  width: '200px',
  textAlign: 'center',
  borderRadius: '10px',
  border:'2px solid black',
  margin: '5px',
  backgroundColor: '#fefefe'
}

const pokename ={
  textDecoration: 'none',
  color: '#fefefe'
}

const pokeImage={
  width: '200px',
  height: ' 155px',
  backgroundColor: '#585858'
}

const pokeNav ={
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'green',
  borderRadius: '5px'
}

const mainPage= {
  width: '1280px',
  margin: "0 auto",
  zIndex: '0',
  top: '60px',
  position: 'relative',

}

const pokeButton ={
  display: 'flex',
  justifyContent: 'center'
}
const pokeCollect ={
  textAlign: 'center',
  borderRadius: '10px',
  border:'2px solid black',
  width: '75%',
  backgroundColor: '#585858'
}

const pokeBody ={
  display:'flex',
  // gridTemplateColumns: '1fr 25%'  ,
  // gap: '10px',
  position: 'relative'
}

const newPokeHeaderDiv ={
  textAlign:'center',
  border: '1px solid black',
  borderRadius: '10px',
  margin: '15px',
  backgroundColor: '#fefefe',
}

const btn ={
  fontSize: '1.2em',
  margin:'13px',
  padding:'6px',
  borderRadius: '10px',
  marginRight: '6px',
  backgroundColor: '#fe5858'
}
const btn2 ={
  fontSize: '1.2em',
  margin:'13px',
  padding:'6px',
  borderRadius: '10px',
  marginLeft: '6px',
  backgroundColor: '#585858',
  color: '#fefefe'
}


const Index = ({pokemons}) => {
  return (
    <>
    <DefaultLayout title="test">
    <New />
    <div style={mainPage}>
    <section style={pokeBody}>
    <div style={pokeCollect}>
    <div style={newPokeHeaderDiv}>
    <h1 style={{color:'#fe5858'}}>Your collection</h1>
    </div>
    <div style={ pokemons.length > 0 ? myStyle : {display:'none'} }>
         {pokemons.map((pokemon, i)=>{ 
            return(
            <div style={pokeDiv} key={i}>
            <h1 style={{color:'#585832'}}> {pokemon.name? pokemon.name.toUpperCase(): 'Pokemon'} </h1>
            <img style={pokeImage} src={`${pokemon.img}`}></img>
           <hr />
            <div style={pokeButton}>
            <button style={btn}><a style={pokename} href={`pokemon/${pokemon._id}`}>Details</a></button>
            <form action={`/pokemon/${ pokemon._id }?_method=DELETE`} method="POST">
            <button style={btn2} type="submit" value='Delete'>Delete</button>
            </form>
            </div>
            </div>
            )
         })}
     </div>
    </div>
   
    </section>
  
   </div>

   </DefaultLayout>
   </>
  )
}

export default Index