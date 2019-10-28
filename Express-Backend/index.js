const express = require('express')
const app = express()
const port = 7070
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

require('dotenv/config')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors())

//Ruteo
const puntosRouter = require('./routes/puntos')
app.use('/puntos', puntosRouter)


// Conexión a la BD
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> {
  console.log('Database Connected')
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// Rutas
app.get('/', (req,res) => {
    res.send('Start!!!!')
})


// Puerto escucha
app.listen(port, () => {
    console.log('Server Started')
})