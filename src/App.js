
import {useState} from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState("")
    

    function handleChange(event) {
        setCity(event.target.value)
    }

    function handleSearch() {
        if (city.trim() === "") {
            setError("Please enter a city name")
            return
        }

        setError("")

        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=128865e894fb5ff752de47a692e8d73f&units=metric`)
            .then(function(response) {
                setWeather(response.data)
                setError("")
            })
            .catch(function(error) {
                setWeather(null)
                setError("City not found. Please try again.")
            })
    }

    return (
        <div className="App">
            <Navbar />

            <main>
                <div className="hero">
    <h1>Your Weather, Your Way.</h1>
    <p>Real-time weather updates to help you plan your day.</p>
</div>
                <SearchBar city={city} handleChange={handleChange} handleSearch={handleSearch}  />
               {error && <p>{error}</p>}

                <WeatherCard weather={weather} />
            </main>
        </div>
    )
}

export default App
