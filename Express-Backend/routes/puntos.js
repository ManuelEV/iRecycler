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
 router.post('/', (req, res) => {
 })
 
 // Updating one subscriber
 router.patch('/:id', (req, res) => {
 })
 
 // Deleting one subscriber
 router.delete('/:id', (req, res) => {
 })

module.exports = router


