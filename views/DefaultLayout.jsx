import React from 'react'
import Navbar from './Navbar/Navbar'

const bodyStyle ={
    margin: '0px',
     position: 'relative',
     display: 'flex',
     flexDirection: 'column',
    }

const DefaultLayout = (props) => {
  return (
<html lang="en">
  <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Crud Pokemon</title>
  </head>
  <body style={bodyStyle}>
     <Navbar />
        {props.children}
  </body>
</html>
  )
}

export default DefaultLayout
