#!/usr/bin/env node
import program from 'commander';
import getWeather from '..';

program.description(`weather city [prop]
  prop: temp/erature/ (default)
        hum/idity/`)
  .version('0.0.1')
  .arguments('<city> [prop]')
  .action(async (city, prop = 'temp') => {
    const weatherInfo = await getWeather(city);
    console.log(weatherInfo[prop]);
  });

program.parse(process.argv);
