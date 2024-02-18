const express = require('express')
const router = express.Router()
const controller = require('../controller/placeController')
const bus  = require('../controller/busController')

// router.get('/',controller.getPlaces)
// router.get('/place/:lat/:lang', controller.getPlaceId)
// router.get('/bus/:id',bus.getbusNum)

router.get("/",controller.getPlaces)
module.exports = router;