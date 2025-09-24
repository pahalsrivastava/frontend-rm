import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function WeatherApiDemo() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const city = query.get("city");

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.23&current_weather=true`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather(data.current_weather);
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Weather Result</h2>
      {!city && <p>No city selected. Please go back to form.</p>}
      {loading && <p>Loading weather...</p>}
      {weather && (
        <>
          <p>
            Weather in <strong>{city}</strong>:
          </p>
          <p>Temperature: {weather.temperature} °C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <button onClick={() => navigate(`/dynamic/${Math.floor(Math.random()*1000)}`)}>
            View City Details
          </button>
        </>
      )}
    </div>
  );
}

export default WeatherApiDemo;
