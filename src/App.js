import { useState } from 'react'
import getData from './components/helpers/fetchData'

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
        <div>
            <h1 style={{"text-align": "center"}}>Weather App</h1>
            <p style={{"text-align": "center"}}>Use this App to find the current weather info of a location</p>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    id="inputField"
                    placeholder="Enter location here ..."
                    onChange={handleInput}
                />
                <button type='submit'>Get Weather</button>
            </form>

            <div style={{"color": "red", "font-size": "1.3rem", "text-align": "center"}}>
                {error}
            </div>

                {
                    !name 
                    ? <div style={{"visibility": "hidden"}}></div> 
                    :
                    <div className="weatherCard">
                        <div className="iconTemp">
                            <div>
                                { icon && <img src={icon} /> }
                            </div>
                            <div className="temp">
                                <span style={{"font-size": "1.2rem"}}>{temp_c}<sup>o</sup>C</span>
                                <span style={{"font-size": "1.2rem"}}>{temp_f}<sup>o</sup>F</span>
                            </div>
                            <p style={{"font-size": "1.2rem"}}>{text}</p> <br />
                        </div> 
                        <br />
                                        <div style={{"display": "flex"}}>
                        <h2>{name}, </h2><h2 style={{"margin-left": "5px"}}>{country}</h2>
                                        </div> <br />
                                          <br/>
                                        <b>Latitude:</b> {lat} <b>Longitutide:</b> {lon} <br />
                                        <p>Date: {localtime}</p>
                                        
                    </div>
                }

        </div>
    )
}

export default App
