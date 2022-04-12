import axios from 'axios'
import Swal from 'sweetalert2'

import './getAllClim.css';

/************ recibir l geolocalizacion ********** */
var lat 
var long 

/********calcularMiUbicacion()*************************************/
function successCallback(res){
    lat = res.coords.latitude;
    long = res.coords.longitude;
}

function errorCallback(res){
    
    
    
    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'deja que el navegador acceda a tu ubicacion!',
        showConfirmButton:false,
        footer: '<input type="button" class="btn-recargar" value="Recargar" onclick="location.reload()">',
      })

    
} 

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    

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

