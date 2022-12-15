const express = require('express')
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');
const pokemonRouter = require('./router/pokemonRouter')

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
  res.send('Welcome')
})

app.use('/pokemon', pokemonRouter)

app.listen(port, ()=>{
    console.log('Server running on'+ port)
})