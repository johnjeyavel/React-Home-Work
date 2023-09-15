
import React, { useState } from 'react'

function Form1() {
const[data,setData]=useState("")  
const[pass,setPass]=useState("")
const[textarea,setTextarea]=useState("")  
const[dataVal,setDataVal]=useState([])  
const[passVal,setPassVal]=useState([])
const[textareaVal,setTextareaVal]=useState([])
const Arr=[data,pass,textarea]
const ArrVal=[dataVal,passVal,textareaVal]


const handleChange=(e)=>{  
setData(e.target.value);

}

const handleChange1=(e)=>{
setPass(e.target.value);

}

const handleChange2=(e)=>{
  setTextarea(e.target.value);

  }

const handleclick=()=>{
// alert("dataValue => "+data+"  +<br/>+"+"passwordValue => "+pass+"  ;  "+"textareaValue => "+textarea);
if(Arr !== ""){
  setDataVal([...dataVal,data]);
setData("");
setPassVal([...passVal,pass]);
setPass("");
setTextareaVal([...textareaVal,textarea]);
setTextarea("");  
}
}


  return (
   <>


<input type='text' placeholder='enter your text' onChange={handleChange}/><br/><br/>
 <input type='password'  placeholder='enter your password' onChange={handleChange1}/><br/><br/> 
<input type='textarea' placeholder='enter your textarea' onChange={handleChange2} /><br/><br/> 


<input type='submit' onClick={handleclick}/>

{/* {ArrVal.map(()=>(



))} */}

<div class="table-responsive">
  <table class="table table-primary">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">password</th>
        <th scope="col">Textaea</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td scope="row">{dataVal}</td>
        <td>{passVal}</td>
        <td>{textareaVal}</td>
      </tr>
    </tbody>
  </table>
</div>

   </>
  )
}
export default Form1;