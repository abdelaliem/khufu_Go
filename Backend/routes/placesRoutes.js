const express = require('express')
const router = express.Router()
const controller = require('../controller/placeController')
const bus  = require('../controller/busController')

// router.get('/',controller.getPlaces)
// router.get('/place/:lat/:lang', controller.getPlaceId)
// router.get('/bus/:id',bus.getbusNum)

// module.exports = router
 
const cors = require("../config/cors");
const app = express();

// cors configuration
app.use(cors);

// middleware
app.get("/bus/:id/:locationId",bus.getBusData)
app.get("/places",controller.getPlaces)
// app.use("/user",useRoute );

// running the backend
app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000/`);
});