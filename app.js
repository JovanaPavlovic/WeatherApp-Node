require("dotenv").config();

const express = require("express");

const app = express();

const weather = require("./weather-route");

require("./cors")(app);

//route

app.use(express.json());
app.use(weather);

// server

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server runs on Port: ", PORT));
