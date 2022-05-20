import axios from 'axios';

const url = 'https://your-study-space.herokuapp.com/weather';

export const fetchWeather = (long, lat) => axios.get(url + `/${long}/${lat}`);