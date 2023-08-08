import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ data }) => {
  const weatherIconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Current Weather in {data.name}, {data.sys.country}
        </Typography>
        <img src={weatherIconUrl} alt="Weather Icon" />
        <Typography variant="body1">
          Temperature: {data.main.temp} °{data.unit === 'metric' ? 'C' : 'F'}
        </Typography>
        <Typography variant="body1">
          Min/Max Temperature: {data.main.temp_min}/{data.main.temp_max} °{data.unit === 'metric' ? 'C' : 'F'}
        </Typography>
        <Typography variant="body1">Humidity: {data.main.humidity}%</Typography>
        <Typography variant="body1">Wind: {data.wind.speed} m/s</Typography>
        <Typography variant="body1">Description: {data.weather[0].description}</Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
