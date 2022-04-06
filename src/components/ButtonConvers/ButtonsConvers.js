import { clear } from '@testing-library/user-event/dist/clear';
import './ButtonConvers.css';
import {axios} from 'axios';
import {useEffect, useState} from "react"
import getAllClim from '../../services/getAllClim.js'
//debo termianr est vain a -----------------------------



const ButtonsConvers = ()=>{

       function limpiarconsola(){
            console.clear();
        }

        const obtenidos = 296.64
        const obtenidosun =  "K"
        const gradosObtenidos = Math.round((obtenidos - 273.15))
        const unidadMedida = "°C"    
        
        const array = (`${gradosObtenidos}${unidadMedida}`)



        const [Temp, setTemp]= useState()

        //
        useEffect(()=> {
            getAllClim().then((res)=> {
              /**temperature */
              const obtenidos = res.data.main.temp
              const obtenidosun =  "K"
              const gradosObtenidos = Math.round((obtenidos - 273.15))
              const array = (`${gradosObtenidos}${unidadMedida}`)

              setTemp(array);    
            })
          },[array, convertAcelcius, convertfaren])
 
// por defecto en grados celcius
     


 
    function convertAcelcius (){
        if (obtenidosun == "K"){      // conversion de k => c
            const kc = Math.round(obtenidos - 273.15) 
            return (setTemp(kc+"°C")) 
        } 
    }
    function convertfaren (){
        if (obtenidosun == "K"){      // conversion de k => c
            const kf = Math.round(((9*(obtenidos - 273.15))/5) + 32)
            return (setTemp(kf+"°F"))
        }
    }
   

    return (
        
        <div className="buttons-convers">
            <div className="buttons">
                <button onClick ={convertAcelcius}>°C</button>
                <button onClick ={convertfaren}>°F</button>
            </div>
            <div className="grados">{Temp}</div>
         </div>
         

    )
}
export default ButtonsConvers