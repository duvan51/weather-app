import './ButtonConvers.css';
import {useEffect, useState} from "react"
import getAllClim from '../../services/getAllClim.js'


const ButtonsConvers = ()=>{
       
        const obtenidosun =  "K"
        const unidadMedida = "°C"    
        var gradosObtenidos = ""

        const [Temp, setTemp]= useState(" ")
        const [tiempo, enviemeTiempo] = useState(" ") //debo obtener los grados en k para poder convertirlos en funciones aparte

        
        useEffect(()=> {
            getAllClim().then((res)=> {
              /**temperature */
              const obtenidos = res.data.main.temp
              gradosObtenidos = Math.round((obtenidos - 273.15))
              return (setTemp(`${gradosObtenidos}${unidadMedida}`),
              enviemeTiempo(obtenidos))      
              
            })
        },[])        
 // por defecto en grados celcius
    function convertAcelcius (){
        if (obtenidosun == "K"){      // conversion de k => c
            const kc = Math.round(tiempo - 273.15)
            return (setTemp(kc+"°C")) 
        } 
    }
    function convertfaren (){
        if (obtenidosun == "K"){      // conversion de k => c
            const kf = Math.round(((9*(tiempo - 273.15))/5) + 32)
            return (setTemp(kf+"°F"))
        }
    }
    function convertkelvin(){
        const K = Math.round(tiempo)
        return (setTemp(K + "K"))
    }
    return (
        
        <div className="buttons-convers">
            <div className="buttons">
                <button onClick ={()=>{convertAcelcius()}}>°C</button>
                <button onClick ={()=>{convertfaren()}}>°F</button>
                <button onClick ={()=>{convertkelvin()}}>K</button>
            </div>
            <div className="grados">{Temp}</div>
         </div>
    )
}
export default ButtonsConvers