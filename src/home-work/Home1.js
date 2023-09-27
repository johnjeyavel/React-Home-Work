import React, { useState } from 'react'

const Home1 = () => {

const[tableData,setTableData]=useState([]); 
const[editData,setEditData]=useState(false); 
const[editedData,setEditedData]=useState([]);
const [input,setInput]=useState({
name:"",
email:"",
})

// const handleChange =(e)=>{
//   setInput({
//     ...input,
//     [e.target.name]:e.target.value,
//   });
// }

const handleSubmit=(e)=>{
e.preventDefault();
if(editData){
const tempData=tableData;
Object.assign(tempData[editedData],input)
setTableData([...tempData])
setEditData(false)
setInput({
  name:"",
  email:""
})
}

else{
  setTableData([...tableData,input])
setInput({
  name:"",
  email:""
})
}
}

const handleDelete=(index)=>{
setTableData((tableData.filter((t,i)=> i!==index)))
}


const handleEdit=(index)=>{
const tempData=tableData[index];
setInput({name:tempData.name, email:tempData.email})
setEditData(true)
setEditedData(index)
}


  return (
    <div>
<form onSubmit={handleSubmit}>
<label for="name">Name</label><br/>
<input name='name' value={input.name} onChange={e=> setInput({...input,name:e.target.value})} /><br/>
{/* <input name='name' value={input.name} onChange={handleChange} /><br/> */}
<label for="email">gmail</label><br/>
<input name='email' value={input.email} onChange={e=> setInput({...input,email:e.target.value})} /><br/>
{/* <input name='email' value={input.email} onChange={handleChange} /><br/> */}
<button type='submit' className='btn-primary'>{editData?"update":"add"}</button>
</form>

<div class="table-responsive">
  <table class="table table-primary">
    <thead>
      <tr>
        <th scope="col">Roll No</th>
        <th scope="col">Name</th>
        <th scope="col">Gmail</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
   {
    tableData.map((item,index)=>(
      <tr>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>
          <button onClick={()=>handleDelete(index)} className='btn-primary'>delete</button>
          <button onClick={()=>handleEdit(index)} className='btn-danger'>edit</button>
        </td>
      </tr>
    ))
   }
    </tbody>
  </table>
</div>




    </div>
  )
}

export default Home1
