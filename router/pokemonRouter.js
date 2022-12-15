const express = require('express');
const Pokemon = require('../models/pokemon');
const router = express.Router();

router.get('/', async (req,res)=>{
    Pokemon.find({}, (error, allPokemon) =>{
        res.render('Index', {
            pokemons: allPokemon
        })
    })
});


//post a new pokemon
router.post('/' , (req, res) =>{
    Pokemon.create(req.body, () =>{
        res.redirect('/pokemon')
    })
})
//get a particular pokemon
router.get('/:id', (req, res) =>{
    Pokemon.findById(req.params.id, (err, foundPokemon) =>{
      res.render('Show', {
         pokemon: foundPokemon
      })
    })
 })
 
//edit a particular pokemon 
router.get('/:id/edit', (req,res)=>{
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

//submit edit request
router.put('/:id', (req,res) =>{
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

// delete a particular pokemon
router.delete('/:id', (req,res)=>{
    const id = req.params.id;
    Pokemon.findByIdAndRemove(id)
    .then((pokemon)=>{
        res.redirect(`/pokemon`)
     })
     .catch((error) =>{
        console.log(error);
        res.json({ error });
     })
});

module.exports = router;

