import axios from 'axios'
import {useState, useEffect} from 'react'

/********calcularMiUbicacion()*************************************/
    var lat
    var long    
     
/********Fin calcularMiUbicacion()*************************************/
lat = 4.15 
long =  -73.633 

const api = {
    API_TOKEN : process.env.REACT_APP_API_TOKEN,
    API : process.env.REACT_APP_API

}

const getAllClim = async ()=>{
    const URL = `${api.API}weather?lat=${lat}&lon=${long}9&appid=${api.API_TOKEN}&lang=sp` 
    const req = await axios.get(URL)
         
    return req;
}
export default getAllClim