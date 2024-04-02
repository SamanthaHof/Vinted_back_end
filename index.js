const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/vinted");

cloudinary.config({
  cloud_name: "dw6rfhtj7",
  api_key: "363994899767859",
  api_secret: "UN_eq9HggTbqfrw6BLMwHI-S5Ls",
});

app.get("/", (req, res) => {
  try {
    return res.status(200).json("Bienvenue sur notre serveur Vinted");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

// Import des routes user :
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");
app.use(userRoutes);
app.use(offerRoutes);

app.all("*", (req, res) => {
  return res.status(404).json("Not found");
});

app.listen(3000, () => {
  console.log("Serveur on fire 🔥🔥🔥🔥🔥🔥");
});
