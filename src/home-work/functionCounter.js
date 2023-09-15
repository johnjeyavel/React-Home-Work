import React, { useState } from "react";

function Counterfn() {

    const[zero,setZero]=useState(0);

const addnow=()=>{
    setZero(zero+1)
}

const erasenow=()=>{
    setZero(zero-1)
}

const resetnow=()=>{
    setZero(zero-zero)
}

return(
    <>
    <div class="text-center my-5 ">
 <p>value:{zero}</p>
<button onClick={addnow} class="mx-1 btn-success rounded" >+</button>
<button onClick={erasenow} class="mx-1 btn-danger rounded" >-</button>
<button onClick={resetnow} class="mx-1 btn-primary rounded" >reset</button>
</div>
    </>
)
    
}
export default Counterfn;