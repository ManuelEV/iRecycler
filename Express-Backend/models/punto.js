const mongoose = require('mongoose')

const PuntoSchema = mongoose.Schema(
    {
    nombre: {
        type: String,
        require: true
    },
    latitud: {
        type: Number,
        require: true
    },
    longitud: {
        type: Number,
        require: true
    },
    descripcion: {
        type: String
    },
    capacidadActual: String,
  }
  );
  
module.exports = mongoose.model('Punto', PuntoSchema);