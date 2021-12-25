import React from 'react'

function WeatherCard({weatherInfo}) {

    const {name, country, lat, lon, localtime, temp_c, temp_f, text, icon} = weatherInfo
    return (
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
    )
}

export default WeatherCard
