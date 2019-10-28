const express = require('express')
const router = express.Router()
const Punto = require('../models/punto')


// Todos los puntos
router.get('/', async (req, res) => {
    try {
        const puntos = await Punto.find()
        res.json(puntos) 
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
 })
 
 // Punto individual
 router.get('/:id', (req, res) => {

 })
 
 // Agregar un punto
 router.post('/', async (req, res) => {
     const punto = new Punto ({
        nombre: req.body.nombre,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        descripcion: req.body.descripcion
    })
    try {
        const newPunto = await punto.save()
        res.status(201).json(newPunto)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
 })

 // Updating one subscriber
 router.patch('/:id', (req, res) => {
 })
 
 // Deleting one subscriber
 router.delete('/:id', (req, res) => {
 })

module.exports = router