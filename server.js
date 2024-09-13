require("dotenv").config();
require("./dbConnect");
const express = require("express");
const groceryItemRoutes = require("./routes/groceryItemRoutes");

const app = express();

app.use(express.json());
app.use("/api/groceryItems", groceryItemRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port
${PORT}.`);
});
