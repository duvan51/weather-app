import {useEffect, useState} from 'react'
import getAllClim from './services/getAllClim.js';
import getAllPaisBan from './services/getAllPaisBan.js';


import './App.css';

//imports components
import ButtonsConvers from './components/ButtonConvers/ButtonsConvers.js'

function App() {
  
  const [city, setCity] = useState("")
  const [icon, setIcon] = useState(" ")
  const [DescriClim, setDescriClim] = useState("")
  const [humity, setDescrihumity] = useState("")
  const [windSpeed, setDescriwindSpeed]= useState("")
  // const [temp, setTemp] = useState(" ")
  
//api recibe datos de icono flag of country 
const [country, setCountry] = useState(" ")  
const [countryP, setCountryP] = useState(" ") // pais 
const [countryImage, setCountryImage] = useState(" ")



//api recibe datos de clima
  useEffect(()=> {
    getAllClim().then((res)=> {
      setCity(res.data.name);
      setIcon(res.data.weather[0].icon);
      setDescriClim(res.data.weather[0].description)
      setDescrihumity(res.data.main.humidity)
      setDescriwindSpeed(res.data.wind.speed)

      /**temperature */
      // setTemp(res.data.main.temp);      
      /**pais por codigo */
      setCountry(res.data.sys.country);
    
      
    })  
        
  },[])


  useEffect(()=> {
     //******aqui vienen las banderas  */
     getAllPaisBan().then((res)=>{
      const pais = country.toLowerCase() //del country lo cambio a minusculas para mi api de paises y banderas
      const da = res.data
      setCountryImage(pais)

      for ( var key in da){
        const counttryValue = (key, key == pais);
        if(counttryValue == true ){
          return(setCountryP(da[key])) // pendiente = arreglar no me carga con la pagina
          
        }
      }
    })
  }, [country])




  return (
    <div className="App">
      <header className="App-header">
        <h1>app clima</h1>
      </header>
      <section className="App-body">
        <main className="App-main"> 
          <section className="App-main-header">
            <div className="App-main-name">
              <div className="App-main-name-country">{city}</div>
              <div className="App-main-name-city">{countryP}</div>
            </div>
            <div className="App-main-bandera"> <img src={`https://flagcdn.com/60x45/${countryImage}.png`} alt="" /> {} </div>  
          </section>

          <div className="icon">
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
            <div className= "temperature" >
               <ButtonsConvers />
            </div>
          </div>

          <div className="descriptio">
            <div className="descriptIcon">
              <div>🧐 DESCRIPCION </div><div>{DescriClim}</div>
            </div>
            <div className="descriptHumity">
              <div>💦 HUMEDAD </div><div>{humity}%</div>
            </div>
            <div className="descriptVientos">
              <div>💨 VIENTOS A </div><div>{windSpeed} m/s</div>
            </div>
          </div>
      
         

          
         
        </main>  
      </section>     
      
        
     
    </div>
  );
}

export default App;
