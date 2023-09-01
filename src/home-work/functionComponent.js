import React from "react";

function Firstfunction(props){

    const Firstfunction1=()=>{
        const functionid1 = document.getElementById("functionid");
        functionid1.innerHTML="component";
    }

return(
<>
<button id="functionid" onClick={Firstfunction1}>function</button>
</>

)

}
export default Firstfunction;