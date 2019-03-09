import axios from 'axios';

const url = 'https://www.metaweather.com/api/location/';

const urlLocation = 'search/?query=';

const client = async (city) => {
  const { data: [{ woeid }] } = await axios.get(`${url}${urlLocation}${city}`);// todo error handle
  const { data: { consolidated_weather: [info] } } = await axios.get(`${url}${woeid}`);// todo error handle
  return info;
};

const getWeather = async (city, getInfo = client) => {
  const data = await getInfo(city);// todo validate data
  const { the_temp: temp, humidity: hum } = data;
  return { temp: Math.round(temp), hum };
};
export default getWeather;
