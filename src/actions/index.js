import axios from 'axios';

const API_KEY = '10b1533a04b73848d671f4621b357766';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url).catch(err => console.log(err));

  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
