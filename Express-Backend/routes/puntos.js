const express = require('express')
const router = express.Router()
const Punto = require('../models/punto')
const multer = require('multer')
const upload = multer({dest: './uploads'})



// Todos los puntos
router.get('/', async (req, res) => {
    try {
        const puntos = await Punto.find()
        res.json(puntos) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
 })
 
 // Agregar un punto
 router.post('/', upload.single('file'), async (req, res) => {
    const punto = new Punto ({
        nombre: req.body.nombre,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        descripcion: req.body.descripcion,
        keywords: req.body.keywords,
        capacidadActual: Math.floor(Math.random()*99)+1
    })
    try {
        const newPunto = await punto.save()
        res.status(201).json(newPunto)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
 })



// Punto individual
router.get('/:id', (req, res) => {

})

 // 
 router.patch('/:id', (req, res) => {
 })
 
 // 
 router.delete('/:id', (req, res) => {
 })

module.exports = router