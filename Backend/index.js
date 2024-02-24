const express = require("express");
const booksRoute = require("./routes/books");
const busesRoute = require('./routes/busesRoutes')
const placesRoute = require('./routes/placesRoutes')
const userRoute = require('./routes/userRoutes')
const driverRoute = require("./routes/driverRoutes")
const cors = require("./config/cors");
const app = express();

// cors configuration
app.use(cors);

// middleware
app.use(express.json())
app.get("/bus/:id/:locationId",busesRoute)
app.get("/all/buses/:id/:locationId",busesRoute)
app.get("/all/buses",busesRoute)
app.get("/bus/:num",busesRoute)
app.use("/places",placesRoute)
// app.use('/bus/:id',placesRoute)
app.use("/user",userRoute );
// route to get all users that have booked the bus_id
app.get("/bookedUsers/:busId",driverRoute)
//route to make book (pass an user_id and bus_id in the body)
app.put("/applyBooks",driverRoute)
// route to cancel the book (pass an user_id in the body)
app.put("/cancelBooks",driverRoute)
// route to mark the book as done by the driver (pass an user_id in the body)
app.put("/doneBooks",driverRoute)

// running the backend
app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000/`);
});
