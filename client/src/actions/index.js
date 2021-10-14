import axios from "axios";

export function getBreeds(){
    return async function (dispatch){
        try {
            let response = await axios.get('http://localhost:3001/dogs');
    
            return dispatch({
                type: 'GET_BREEDS',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getBreedsByName(name){
    return async function (dispatch){
        try {
            let response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            return dispatch({
                type: 'GET_BREEDS_BY_NAME',
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getBreedDetail(id){
    return async function (dispatch){
        try {
            let response = await axios.get(`http://localhost:3001/dogs/${id}`)
            return dispatch({
                type: 'GET_BREED_DETAIL',
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getTemperaments(){
    return async function (dispatch){
        try {
            let response = await axios.get('http://localhost:3001/temperament');
    
            return dispatch({
                type: 'GET_TEMPERAMENTS',
                payload: response.data
            })
            
        } catch (error) {
            console.log(error);
        }
    }
    
}

export function postBreed(payload){
    return async function (dispatch){
        try {
            let response = await axios.post('http://localhost:3001/dogs', payload);
            console.log(response);
            return response;
        } catch (error) {
            
        }
    }
}

export function filterBreedsByTemperaments(payload){
    return {
        type: 'FILTER_BREEDS_BY_TEMPERAMENTS',
        payload
    }
}

export function filterCreated (payload){
    return {
        type: 'FILTER_CREATED',
        payload
    }
}

export function orderBreeds(order, category){
    return {
        type: order === "asc" ? "ORDER_ASC" : "ORDER_DES",
        payload: category
    }
}