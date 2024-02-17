const express = require("express");
const booksRoute = require("./routes/books");
const busesRoute = require('./routes/busesRoutes')
const placesRoute = require('./routes/placesRoutes')
// const useRoute = require('./routes/userRoutes')
const cors = require("./config/cors");
const app = express();

// cors configuration
app.use(cors);

// middleware
app.use(express.json())
app.use("/books", booksRoute);
app.get("/bus/:id/:locationId",busesRoute)
app.use("/places",placesRoute)
// app.use('/bus/:id',placesRoute)
 
// app.use("/user",useRoute );

// running the backend
app.listen(8000, () => {
  console.log(`Server is running on http://localhost:8000/`);
});
