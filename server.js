const express = require("express");
let groceryItemRoutes = require('./routes/groceryItemRoutes');


const app = express();

require("dotenv").config();

let dbConnect = require("./dbConnect")

// parse requests of content-type -application/json
app.use(express.json());
app.use('/api/groceryItems', groceryItemRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
