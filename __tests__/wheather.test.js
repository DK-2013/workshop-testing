import getWeather from '../src';

const data = {
  berlin: { the_temp: 10, humidity: 0.6 },
  moscow: { the_temp: -1, humidity: 0.8 },
};
const client = (cityName) => data[cityName];

test('get weather', async () => {
  const weatherInfo = await getWeather('berlin', client);
  expect(weatherInfo.temp).toBe(10);
});
