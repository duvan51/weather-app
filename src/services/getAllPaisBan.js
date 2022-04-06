import axios from 'axios'

const codPis = "co" 


const getAllPaisBan = async()=>{

    const URL = `https://flagcdn.com/es/codes.json` 
    const req = await axios.get(URL)
         
    return req;


}
export default getAllPaisBan
