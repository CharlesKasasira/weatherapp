import React from 'react'
import getData from '../helpers/fetchData'

function Hero() {

    const [stateLocation, setStateLocation] = React.useState('Kampala')
    const [weatherInfo, setWeatherInfo] = React.useState({})
    const [error, setError] = React.useState('')

    const handleInput = e => {
        const {value : inputLocation} = e.target
        setStateLocation(inputLocation)
    } //console.log(e.target.value)

    const onSubmit = async (e) => {
        e.preventDefault()
        setError('')
        // console.log(e)
        const response = await getData(stateLocation)

        if(response){
            const {location: {name, country, lat, lon}} = response
            const {current: {temp_c, temp_f, condition: {text, icon}}} = response
            setWeatherInfo({name, country, lat, lon, temp_c, temp_f, text, icon})
        } else {
            setError("Technical error, please try again.")
        }
    }

    const {name, country, lat, lon, temp_c, temp_f, text, icon} = weatherInfo

    return (
        <div>
            <h1 style={{"text-align": "center"}}>Weather App</h1>
            <p style={{"text-align": "center"}}>Use this App to find the current weather info of a location</p>
            <form onSubmit={onSubmit} action="#" method="post">
                <input
                    type="text"
                    name=""
                    id="inputField"
                    placeholder="Enter location here ..."
                    onChange={handleInput}
                />
                <button onClick={onSubmit}>Get Weather</button>
            </form>

            <div className="weatherCard">
                {
                    !name ? <div style={{"height": "275px", "width": "275px"}}></div> :
                    <div>
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
                                        
                    </div>
                }
                
            </div>

        </div>
    )
}

export default Hero
