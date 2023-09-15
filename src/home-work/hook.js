import React, { useState } from "react";


function Hook(){
// const[state,setstate]=useState();

const [counter,setCounter]=useState("")
const [todo,setTodo]= useState([])
const [edit,setEdit]=useState(-1)
const [edited,setEdited]=useState("")

const addTodo = ()=>{  
if(counter !== ""){
    setTodo([...todo,counter]);
    setCounter("");
}
else{
    alert("error:type input value")
}
}

const deleteNow = (Index) =>{
setTodo(todo.filter((v,i)=> i !==Index)) 
}

const editNow = (Index)=>{
setEdit(Index)
    setEdited(todo[Index])
}

const saveNow = (Index)=>{
setTodo(todo.map((indexValue,i)=> i === Index? edited : indexValue));
setEdit(-1);
setEdited("")
}


    return(
        <>
     <div class="text-center my-5">
        <input type="text" value={counter} onChange={(e)=>setCounter(e.target.value)} class="shadow-lg p-2 mb-5 bg-body rounded col-5 border border-4 mx-5"/>
        
        <button onClick={addTodo} class="shadow-lg p-2 mb-5  rounded col-1 btn-primary fw-bold">Add</button>
        
        <ul>
{todo.map((indexValue,Index)=>(
    <li key={Index} class="span col-11 my-3" >
{edit === Index?      
(<>  
<input type="text" value={edited} onChange={(e)=>setEdited(e.target.value)} class="span1  mx-5"/> 
 <button onClick={()=>saveNow(Index)} class="rounded col-1 btn-primary fw-bold mx-5">Save</button>              
</>  ) :
(<>
<span class="mx-5 ">{indexValue}</span>

<button onClick={()=>editNow(Index)} class="rounded col-1 btn-primary fw-bold mx-4">Edit</button>
<button onClick={()=>deleteNow(Index)} class=" rounded col-1 btn-primary fw-bold">Delete</button><hr/>

</>
    )
}
    </li>
))}

        </ul>
        </div>
        </>
    )
}
export default Hook;
