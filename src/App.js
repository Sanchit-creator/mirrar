import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
import WeatherCard from './WeatherCard';

const API_KEY = '499edaa84c73099ef091162e73b7f710';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric'); // Default: Celsius

  const handleSearch = async () => {
    try {
      if (city) {
        const response = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
          params: {
            q: city,
            units: unit,
            appid: API_KEY,
          },
        });
        setWeatherData(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    if (city) {
      handleSearch();
    }
  }, [city, unit]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Weather Forecast App
      </Typography>
      <TextField
        label="Enter City"
        variant="outlined"
        fullWidth
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <ToggleButtonGroup
        value={unit}
        exclusive
        onChange={(event, newUnit) => setUnit(newUnit)}
        aria-label="temperature unit"
        sx={{ marginBottom: 2 }}
      >
        <ToggleButton value="metric">Celsius</ToggleButton>
        <ToggleButton value="imperial">Fahrenheit</ToggleButton>
      </ToggleButtonGroup>
      {weatherData && <WeatherCard data={weatherData} />}
    </Container>
  );
};

export default App;
