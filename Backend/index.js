const express = require("express");
const booksRoute = require("./routes/books");
const placesRoute = require('./routes/placesRoutes')
const cors = require("./config/cors");
const app = express();

// cors configuration
app.use(cors);

// middleware
app.use(express.json())
app.use("/books", booksRoute);
app.use("/places",placesRoute );

// running the backend
app.listen(9000, () => {
  console.log(`Server is running on port 9000`);
});
