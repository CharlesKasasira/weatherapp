import React from 'react'

function WeatherCard({weatherInfo}) {

    const {name, country, lat, lon, localtime, temp_c, temp_f, text, icon} = weatherInfo
    return (
        <div className="weatherCard">
            <div>
                <div>
                    { icon && <img src={icon} /> }
                </div>
                <div>
                    <span>{temp_c}<sup>o</sup>C</span>
                    <span>{temp_f}<sup>o</sup>F</span>
                </div>
                <p>{text}</p> <br />
            </div> 
            <br />
            <div>
                <h3>{name}, </h3><h3>{country}</h3>
            </div> <br />
                <br/>
            <b>Latitude:</b> {lat} <b>Longitutide:</b> {lon} <br />
            <p>Date: {localtime}</p>
                                        
        </div>
    )
}

export default WeatherCard
