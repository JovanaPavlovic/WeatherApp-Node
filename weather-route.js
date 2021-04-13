const express = require("express");
const router = express.Router();

const controller = require("./weather-controller");

router.get("/weather", controller.getWeather);

router.get("/weather/custom", controller.getCustomWeather);

module.exports = router;
