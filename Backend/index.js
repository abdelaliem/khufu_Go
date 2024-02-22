const express = require("express");
const booksRoute = require("./routes/books");
const busesRoute = require('./routes/busesRoutes')
const placesRoute = require('./routes/placesRoutes')
const userRoute = require('./routes/userRoutes')
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

// running the backend
app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000/`);
});
