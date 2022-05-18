import React from 'react';

export default function ForecastList({ weather, query }) {

  function kelvinToFahrenheit(temp){
    const kelvin = temp;
    const fahrenheit = Math.ceil((kelvin - 273.15) * (9 / 5) + 32);

    return fahrenheit;
  }
  return (
    <div>
      <h1>{query}</h1>
      {weather.map((forecast, i) => 
        <div key={forecast.dt + i} >
          <p>{String(new Date(forecast.dt * 1000))}</p>
          <p>Min:{kelvinToFahrenheit(forecast.temp.min)} deg F - Max: {kelvinToFahrenheit(forecast.temp.max)} deg F</p>
        </div>
      )}
    </div>
  );
}
