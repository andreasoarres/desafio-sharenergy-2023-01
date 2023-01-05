import { useEffect } from "react";
import api from "../../services/Api"
function Usuario(){
    useEffect(()=>{
        api.get().then(response =>console.log(response.data))
    },[])
   return <h1>Hello</h1> 

}
export default Usuario;
