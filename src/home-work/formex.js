import React from "react";

function Form(props){

const formfun=()=>{
const gmail1 = document.getElementById("gmail").value;
const Password1 = document.getElementById("Password").value;
const ConformPassword1 = document.getElementById("Conform-Password").value;
  
if(Password1 !== ConformPassword1){
    alert("incurrect password")
}

else{
    alert("password ok")
}

console.log(
    gmail1+Password1+ConformPassword1
);

}


return(
<>
<label>Enter your Gmail</label><br/>
<input type="gmail" id="gmail" placeholder="your Gmail" required/><br/>

<label>Enter your Password</label><br/>
<input type="Password" id="Password" placeholder="your Password" required/><br/>

<label>Enter your Conform-Password</label><br/>
<input type="Conform-Password" id="Conform-Password" placeholder="your Conform-Password" required/><br/>

<button id="formfun" onClick={formfun}>submit</button><br/>



</> 

);
}
export default Form;