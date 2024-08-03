import { useState } from 'react';
import PropTypes from 'prop-types';


const mockWeatherData = {
 'New York': {
   temperature: '22°C',
   humidity: '56%',
   windSpeed: '15 km/h'
 },
 'Los Angeles': {
   temperature: '27°C',
   humidity: '45%',
   windSpeed: '10 km/h',
 },
 'London': {
   temperature: '15°C',
   humidity: '70%',
   windSpeed: '20 km/h'
 },
};


function HistoryButton({ city, onClick }) {
  return (
    <button 
    key={city}
    id='cityButton'
    onClick={() => onClick(city)}>
      {city}
    </button>
  )
}

HistoryButton.propTypes = {
  city: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


function WeatherDashboard() {
  const [history, setHistory] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [error, setError] = useState('')
  const [wheaterData, setWheaterData] = useState(history);

  const handleSearch = () => {
    const normalizedCity = searchCity.trim().toLowerCase();
    const foundCity = Object.keys(mockWeatherData).find((city) => city.toLowerCase() === normalizedCity);

    if(foundCity) {
      setWheaterData(mockWeatherData[foundCity]);
      setHistory((prevHistory) => [...new Set([foundCity, ...prevHistory])]);
      setError('');

    } else {
      setWheaterData(null);
      setError('City not found');
    }
  }

  const handleHistory = (city) => {
    setWheaterData(mockWeatherData[city]);
    setError('');
  }

  return(
    <>
      <input
      type='text'
      id="citySearch"
      placeholder='Search for a city...'
      value={searchCity}
      onChange={(e) => setSearchCity(e.target.value)}
      />
      <button
      id='searchButton'
      onClick={handleSearch}
      >
        Search
      </button>
      <div id='previousSearches'>
        {history.map(
          city => <HistoryButton key={city} city={city} onClick={handleHistory}/>
        )}
      </div>
      <div id='wheaterData'>
        {wheaterData ? (
          <>
            <div>Temperature: {wheaterData.temperature}</div>
            <div>Humidity: {wheaterData.humidity}</div>
            <div>Wind Speed: {wheaterData.windSpeed}</div>
          </>
        ): (
          <div>{error}</div>
        )}
      </div>
    </>
  );
}

export default WeatherDashboard;
