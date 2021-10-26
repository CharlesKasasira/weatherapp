import axios from "axios";

const getData = async ( endpoint="todos" ) => {
    const API_URL = `http://localhost:8889/${endpoint}`;
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