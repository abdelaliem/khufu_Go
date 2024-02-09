const express = require('express')
const app = express()
app.use(express.json())
const placeController = require('../../controller/placeController')
const bus  = require('../../controller/busController')
app.get('/places',placeController.getPlaces)
app.get('/place/:lat/:lang', placeController.getPlaceId)
app.post('/bus/:lat/:lang',bus.getbusNum)

