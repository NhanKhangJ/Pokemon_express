import React from 'react'

const New = () => {
  return (
        <div >
            <h1>Add your new Pokemon to database</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" /><br/>
                Image Url: <input type="text" name="img" /><br/>
                <input type="submit" name="" value="Create Pokemon"/>
             </form>
        </div>
  )
}

export default New