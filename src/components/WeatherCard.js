
function WeatherCard(props){
    
    const weather=props.weather

    if (!weather){
        return null
    }

    const condition=weather.weather[0].main

    let weatherEmoji="🌤️"

    if (condition==="Clear") {
        weatherEmoji="☀️"
    } else if (condition==="Clouds") {
        weatherEmoji= "☁️"
    } else if (condition==="Rain") {
        weatherEmoji= "🌧️"
    } else if (condition==="Drizzle") {
        weatherEmoji= "🌦️"
    } else if (condition==="Thunderstorm") {
        weatherEmoji= "⛈️"
    } else if (condition==="Snow") {
        weatherEmoji="❄️"
    } else if (condition==="Mist" || condition==="Fog" || condition==="Haze") {
        weatherEmoji= "💨"
    }

    return (
        <div className="weather_card">
            <div className="weather_main">
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.weather[0].description}</p>
                    <h1>{Math.round(weather.main.temp)}°C</h1>
                    <p>Min: {Math.round(weather.main.temp_min)}°C | Max: {Math.round(weather.main.temp_max)}°C</p>
                </div>

                <div className="weather_emoji">
                    {weatherEmoji}
                </div>
            </div>

            <div className="weather_details">
                <div>
                    <p>Humidity</p>
                    <h3>{weather.main.humidity}%</h3>
                </div>

                <div>
                    <p>Wind Speed</p>
                    <h3>{weather.wind.speed} m/s</h3>
                </div>

                <div>
                    <p>Feels Like</p>
                    <h3>{Math.round(weather.main.feels_like)}°C</h3>
                </div>

                <div>
                    <p>Pressure</p>
                    <h3>{weather.main.pressure} hPa</h3>
                </div>

                <div>
                    <p>Visibility</p>
                    <h3>{weather.visibility / 1000} km</h3>
                </div>

                <div>
                    <p>Cloudiness</p>
                    <h3>{weather.clouds.all}%</h3>
                </div>

                <div>
                    <p>Wind Direction</p>
                    <h3>{weather.wind.deg}°</h3>
                </div>

                <div>
                    <p>Sunrise</p>
                    <h3>{new Date((weather.sys.sunrise + weather.timezone) * 1000).toISOString().slice(11, 16)}</h3>
                </div>

                <div>
                    <p>Sunset</p>
                    <h3>{new Date((weather.sys.sunset + weather.timezone) * 1000).toISOString().slice(11, 16)}</h3>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard
