import React, {Component} from "react";
import "./homeWork.css";


class First extends React.Component{
constructor(props){
    super(props);
}


    render(){
        const First1 = ()=>{
            const Firstid1 = document.getElementById("Firstid");
            
            Firstid1.innerText="first text";
            
          
        }

    return(
<>
<h1 id="Firstid" class="success">First Component</h1>

<button onClick={First1}>first button</button>



</>
    );
}
}
export default First;


