import { useEffect, useState } from 'react';

export default function Weather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetch('/api/weather')
            .then((res) => res.json())
            .then((data) => setWeather(data))
            .catch((err) => console.error(err));
    }, []);

    if (!weather) return null;

    return (
        <div>
            <h1>Weather in {weather.name}</h1>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Feels Like: {weather.main.feels_like}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Weather: {weather.weather[0].description}</p>
        </div>
    );
}