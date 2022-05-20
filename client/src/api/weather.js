import axios from 'axios';

const url = 'http://localhost:4000/weather';

export const fetchWeather = (long, lat) => axios.get(url + `/${long}/${lat}`);