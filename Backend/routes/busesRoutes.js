const express = require('express')
const router = express.Router()
const bus  = require('../controller/busController')
 
router.get("/bus/:id/:locationId",bus.getBusData)
router.get("/all/buses/:id/:locationId",bus.getAllBusesOfId)
router.get("/all/buses",bus.getAllBuses)
router.get("/bus/:num",bus.getAllBusesOfNum)
// router.get("/places",controller.getPlaces)

module.exports = router;