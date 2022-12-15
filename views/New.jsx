import React from 'react'


const newPokeDiv = {
   display: 'flex',
   flexDirection: 'column',
   borderRadius: '10px',
   border:'2px solid black',
   width: '23.5%',
   /* position: sticky; */
   position: 'absolute',
   right: '0px',
   backgroundColor: '#585858'
}

const newPokeHeaderDiv ={
  textAlign:'center',
  border: '1px solid black',
  borderRadius: '10px',
  margin: '15px',
  padding: '4px',
  backgroundColor: '#fefefe'
}

const newPokeForm = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid black',
  borderRadius: '10px',
  margin: '0 15px 5px 15px',
  padding: '10px',
  backgroundColor: "#fe5858",
  color: '#ffffff'
}
const btn ={
  fontSize: '20px',
  height: '2.9rem',
  borderRadius: '10px',
  padding: '0px 10px 0px 10px',
  marginTop: '5px',
  backgroundColor: "#ffffff",
  color: '#585858',
  cursor: 'pointer'
}
const testDiv ={
  display:'flex',
  // gridTemplateColumns: '1fr 25%'  ,
  // gap: '10px',
  position: 'fixed',
  width: '1280px',
  alignSelf: 'center',
  top: '79px',
  zIndex: '1'
}
const label ={
  borderRadius: '5px',
}

const New = () => {
  return (
    <div style={testDiv}>
       <div></div>
        <div style={newPokeDiv}>
            <div style={newPokeHeaderDiv}>
            <h1 style={{fontSize: '1.5em', color:'#fe5858'}}>ADD POKEMON</h1>
            </div>
            <form style={newPokeForm} action="/pokemon" method="POST">
                <label>NAME :</label>
                <input style={label} type="text" name="name" />
                <label>IMAGES URL :</label>
                <input style={label} type="text" name="img" />
                <label>DESCRIPTION :</label>
                <textarea style={label} name="description" rows="10"></textarea>
                <input style={btn} type="submit" name="" value="Create Pokemon"/>
             </form>
        </div>
    </div>
  )
}

export default New