#!/usr/bin/env node
import program from 'commander';
import getWeather from '..';

program
  .command('weather <city> [prop]')
  .description(`weather city [prop]
  prop: temp/erature/ (default)
        hum/idity/`)
  .action(async (city, prop = 'temp') => {
    const weatherInfo = await getWeather(city);
    console.log(weatherInfo[prop]);
  });

program.parse(process.argv);
