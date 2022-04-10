import axios from 'axios'


/************ recibir l geolocalizacion ********** */
var lat 
var long 

/********calcularMiUbicacion()*************************************/
function successCallback(res){
    lat = res.coords.latitude;
    long = res.coords.longitude;

    alert(`tu longitud es = ${long}, y tu latitud es = ${lat},`)
}

function errorCallback(res){
    alert("deebes permiir al navegador acceder a tu ubicacion")
} 

var geoOps= {
    enableHighAccuracy:true,
    timeout:2000
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback, geoOps);
    

/********Fin calcularMiUbicacion()*************************************/
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

