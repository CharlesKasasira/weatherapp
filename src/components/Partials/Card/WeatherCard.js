import './weatherCard.css'

export default function WeatherCard({weatherInfo}) {

    const {name, country, lat, lon, localtime, temp_c, temp_f, text, icon} = weatherInfo

    return (
        <div className="weatherCard">
            <div>
                { icon && <img src={icon} /> }
                <div>
                    <span>{temp_c}<sup>o</sup>C</span>
                    <span>{temp_f}<sup>o</sup>F</span>
                </div>
                <p>{text}</p>
            </div>
            <div className='name'>
                <h3>{name} </h3><h5>({country})</h5>
            </div>
            <div class="location">
                <b>Latitude:</b> {lat}
                <b>Longitutide:</b> {lon}
                <p>Local Time: {localtime}</p>
            </div>
                                        
        </div>
    )
}

