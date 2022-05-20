import axios from 'axios';

const API_KEY = '80fc0780bc33bc655476982259c5c146';

export const getWeather = async (req, res) => {
    const [lon, lat] = [req.params.lon, req.params.lat];
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
        .then(weatherData => {
            res.status(201).json({ temp: weatherData.data.main, appearance: weatherData.data.weather })
        })
        .catch(err => res.status(401).json({ error: err.message }))
}