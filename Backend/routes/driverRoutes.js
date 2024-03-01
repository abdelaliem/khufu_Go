const express = require('express')
const router = express.Router()
const driverController = require("../controller/driverController")
 
router.get("/bookedUsers/:busId",driverController.Users)
router.put("/doneBooks",driverController.bookDone)
router.put("/cancelBooks",driverController.cancelBook)
router.put("/applyBooks",driverController.bookUsers)
router.put("/updatelatlang",driverController.UpdateBusLocation)
router.put("/updatelatlanguser",driverController.UpdateUserLocation)
module.exports = router
