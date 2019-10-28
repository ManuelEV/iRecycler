const mongoose = require('mongoose')

const PuntoSchema = mongoose.Schema(
    {
    nombre: {
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String
    },
    capacidadActual: String,
  }
  );
  
module.exports = mongoose.model('Punto', PuntoSchema);