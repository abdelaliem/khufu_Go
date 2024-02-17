const express = require('express')
const router = express.Router()
const bus  = require('../controller/busController')
 
router.get("/bus/:id/:locationId",bus.getBusData)
// router.get("/places",controller.getPlaces)

module.exports = router;