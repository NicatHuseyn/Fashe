import axios from 'axios';
import { BASE_URL } from "./url";

//  get all data
export async function getAllData(endpoint) {
    const response = await axios.get(`${BASE_URL}/${endpoint}`)
    return response;
}


//  get by id
export async function getDataById(endpoint,id) {
    const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`)
    return response;
}

export async function createProduct(endpoint,payload) {
    const response = await axios.post(`${BASE_URL}/${endpoint}`,payload)
    return response;
}