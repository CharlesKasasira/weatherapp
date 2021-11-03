import axios from "axios";

const getData = async ( location="Kampala" ) => {
    const API_URL = `${process.env.REACT_APP_API_BASE}?key=${process.env.REACT_APP_API_KEY}&q=${location}`
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