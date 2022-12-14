const express = require('express')
const app = express();
const port = 3000;
const Pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');
const { Fragment } = require('react');
dotenv.config()

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'))
app.use(bodyPaser.urlencoded({ extended: false}))


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'))

app.get('/', (req,res)=>{
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', async (req,res)=>{
    Pokemon.find({}, (error, allPokemon) =>{
        res.render('Index', {
            pokemons: allPokemon
        })
    })
});

app.get('/pokemon/new', (req,res) =>{
    res.render('New')
})
app.post('/pokemon' , (req, res) =>{
    Pokemon.create(req.body, () =>{
        res.redirect('/pokemon')
    })
})
app.get('/pokemon/:id', (req, res) =>{
    Pokemon.findById(req.params.id, (err, foundPokemon) =>{
      res.render('Show', {
         pokemon: foundPokemon
      })
    })
 })
 
app.get('/pokemon/:id/edit', (req,res)=>{
    const id = req.params.id
    Pokemon.findById(id)
    .then((pokemon) =>{
        res.render('Edit', {pokemon})
    })
    .catch((error) =>{
        console.log(error);
        res.json({ error });
    })
})


app.put('/pokemon/:id', (req,res) =>{
    const id = req.params.id
    
    Pokemon.findByIdAndUpdate(id, req.body, {new: true})
     .then((pokemon)=>{
        res.redirect(`/pokemon/${id}`)
     })
     .catch((error) =>{
        console.log(error);
        res.json({ error });
     })
})

app.delete('/pokemon/:id', (req,res)=>{
    const id = req.params.id;
    Pokemon.findByIdAndRemove(id)
    .then((pokemon)=>{
        res.redirect(`/pokemon`)
     })
     .catch((error) =>{
        console.log(error);
        res.json({ error });
     })
})



app.listen(port, ()=>{
    console.log('Server running on'+ port)
})