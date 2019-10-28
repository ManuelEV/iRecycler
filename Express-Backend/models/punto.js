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
        capacidadActual: {
            type: Number, 
            min: 0,
            max: 100
        },
        keywords: [{
            type: String
        }],
        img: {
            data: Buffer,
            contentType: String
        }
    }
  );
  
module.exports = mongoose.model('Punto', PuntoSchema);