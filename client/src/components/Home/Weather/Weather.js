import React, { useEffect, useState } from "react";

import { fetchWeather } from "../../../api/weather";

import './Weather.css'

const Weather = () => {
    const [weather, setWeather] = useState('');

    const successCallback = (pos) => {
        const coords = pos.coords;
        fetchWeather(coords.longitude, coords.latitude)
            .then(res => {
                const temp = new Intl.NumberFormat(`${navigator.language}`, { style: 'unit', unit: 'celsius', minimumFractionDigits: 1, maximumFractionDigits: 1, }).format(res.data.temp.temp)
                setWeather({ temp, appearance: res.data.appearance[0].main });
            })
            .catch(err => console.log(err.message))
    }

    const errorCallback = (err) => {
        console.log(err.message);
        setWeather('Allow this website to read your location to receive local weather')
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
    }, [])

    return (
        <div className="weather">
            <h1>{weather?.temp || ''} {weather?.appearance || ''}</h1>
        </div>
    );
}

export default Weather;