import React, { useState } from 'react'

function Form() {
const[data,setData]=useState("")  
const[pass,setPass]=useState([])
const[textarea,setTextarea]=useState("")  

const handleChange=(e)=>{
setData(e.target.value)
}

const handleChange1=(e)=>{
setPass(e.target.value);
}

const handleChange2=(e)=>{
  setTextarea(e.target.value);
  }

const handleclick=()=>{
alert("dataValue => "+data+"  ;  "+"passwordValue => "+pass+"  ;  "+"textareaValue => "+textarea);
}


  return (
   <>
   <form>
<input type='text' placeholder='enter your text' onChange={handleChange}/><br/><br/>
<input type='password'  placeholder='enter your password' onChange={handleChange1}/><br/><br/>
<input type='textarea' placeholder='enter your textarea' onChange={handleChange2} /><br/><br/>

<input type='submit' onClick={handleclick}/>
   </form>
   </>
  )
}
export default Form;