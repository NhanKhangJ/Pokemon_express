
const express = require('express')
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js')



app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res)=>{
      res.render('Index', {pokemons: pokemon})
})

app.get('/pokemon/:id', (req, res) =>{
    res.send(req.params.id)
})

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(port, ()=>{
    console.log('Server running on'+ port)
})