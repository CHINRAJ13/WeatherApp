const fetchWeather = require("../utils/fetchWeather");


exports.getWeatherByCoords =  async (req, res) => {
    const {lat, lon} = req.query;
    try {
        const data = await fetchWeather({lat, lon});
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}

exports.getWeatherByCity =  async (req, res) => {
    const {city} = req.params;
    try {
        const data = await fetchWeather({city});
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message
        })
    }
}