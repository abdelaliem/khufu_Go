const express = require('express')
const router = express.Router()
const controller = require('../controller/placeController')
router.get("/",controller.getPlaces)
module.exports = router;