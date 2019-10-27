const express = require('express')
const app = express()
const port = 7070
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

// Conexión a la BD
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, ()=> {
  console.log('Database Connected')
})
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());

//Schema

const PuntoSchema = mongoose.Schema(
  {
  nombre: String,
  lat: String,
  lon: String,
  descripcion: String,
  capacidadActual: String,
}
);

const PuntoModel = mongoose.model('Punto', PuntoSchema);

// Rutas

//CRUD Agregar y get

app.get('/', (req,res) => {
    res.send('Start!!!!')
})

//Devolver todos los puntos
app.get("/api/punto", async (request, response) => {
  try {
      var result = await PuntoModel.find().exec();
      response.send(result);
  } catch (error) {
      response('Error');
  }
});

//Agregar puntos
app.post('/api/punto', function (req, res) {
  console.log(req.body)
  res.send(req.body)
})


// Puerto escucha

app.listen(port, () => {
    console.log('Servidor Iniciado')
})