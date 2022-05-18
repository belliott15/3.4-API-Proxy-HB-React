import { useState } from 'react';
import { getWeatherData } from './services/fetch.utils';
import ForecastList from './services/ForecastList';
import Spinner from './Spinner';

export default function WeatherSearch() {
      // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [weather, setWeather] = useState([]);
  const [weatherQuery, setWeatherQuery] = useState('');
  const [loading, setLoading] = useState(false);
  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
    setLoading(true);
        // set the loading state to true
        // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
    const weatherData = await getWeatherData(weatherQuery);
    console.log(weatherData.daily);  
  
        // put the jsonified data in state and set the loading state to false
    setWeather(weatherData.daily);
    setLoading(false);
  }
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather for a city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <label> City Name:
          <input required value={weatherQuery} onChange={(e) => setWeatherQuery(e.target.value)} />
        </label>
        <button>Get weather</button>
      </form>
      {loading ? <Spinner /> 
        : <ForecastList weather={weather} query={weatherQuery}/>
      }
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
    </section>
  );

}
