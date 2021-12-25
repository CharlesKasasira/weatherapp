import { useState } from 'react'
import getData from './components/helpers/fetchData'
import WeatherCard from './components/Partials/WeatherCard'

function App() {

    const [stateLocation, setStateLocation] = useState('Kampala')
    const [weatherInfo, setWeatherInfo] = useState({})
    const [error, setError] = useState('')

    const handleInput = ({target}) => setStateLocation(target.value)

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const response = await getData(stateLocation)

        if(response){
            const {location: {name, country, lat, lon, localtime}} = response
            const {current: {temp_c, temp_f, condition: {text, icon}}} = response
            setWeatherInfo({name, country, lat, lon, localtime, temp_c, temp_f, text, icon})
        } else {
            setError("Technical error, please try again.")
        }
    }

    const {name, country, lat, lon, localtime, temp_c, temp_f, text, icon} = weatherInfo

    return (
        <div className='Container'>
            <h1>Weather App</h1>
            <p>Find weather information of any city or state</p>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    id="inputField"
                    placeholder="Enter location here ..."
                    onChange={handleInput}
                />
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>

            <div style={{"color": "red", "font-size": "1.3rem", "text-align": "center"}}>
                {error}
            </div>

                {
                    !name ? <div style={{"visibility": "hidden"}}></div> : <WeatherCard weatherInfo={weatherInfo}/>
                }

        </div>
    )
}

export default App
