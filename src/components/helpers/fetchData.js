import axios from "axios";

const getData = async ( location="Kampala" ) => {
    // const API_URL = `http://localhost:8889/${endpoint}`;
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=93ec627bbff54c968ed133550212210&q=${location}`
    let response = '';

    try {
        response = await axios.get(API_URL);
        
        let { data } = response
        return data 
        
    } catch (error) {
        console.log(error)
    }
}

export default getData