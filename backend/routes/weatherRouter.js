const express = require('express');
const { getWeatherByCoords, getWeatherByCity } = require('../controller/weatherController');
const router = express.Router();

router.get('/current', getWeatherByCoords);
router.get('/city/:city', getWeatherByCity);

module.exports = router;