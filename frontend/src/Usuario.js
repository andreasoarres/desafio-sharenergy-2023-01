/* eslint-disable no-unused-vars */
import { Component } from "react";
/*import Usuario from "usuario";*/
class Usuario extends Component{
   constructor(props){
        super(props)
        this.state = {
            items:[],
            loading:false
        }
        this.componentDidMount()
            fetch("https://randomuser.me/api/ ")
            .then((response) => response.json())
            .then((response) => {
             this.setState({
                items:response.results,
                loading:true
             })
            })  

            
    }
    

    render(){
        var [,loading] = this.state

        if(!loading){
        return(
           <div>Loading...</div>
        )
        }

        else{

        }
        return(
            <div>data</div>
     
        )
        
    }
}

export default Usuario;