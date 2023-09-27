import React from 'react'
import { useState } from 'react'

const Deletefn = () => {
    const[item,setItem] =useState([])
    const[item1,setItem1] =useState([])


    const[list,setList] =useState([
        {id:{item1}},
        {id:2,name:"jeyavel"},
        {id:3,name:"find"},
        {id:4,name:"gfw"},
        {id:5,name:"jgDGHGUFEG"},
    ])


const addlist =()=>{
    setItem1([...item1,item])
}

const removeList=(id)=>{
  const newList = list.filter((i) => i.id !== id )
  setList(newList);
}


  return (
    <div>
<input type='text'onChange={(e)=>setItem(e.target.value)} />
<button onClick={addlist}>add</button>
<p>{item1}</p>
      <ul>
{
list.map((todo)=>(
    <li key={todo.id}>{todo.name}
<button onClick={()=>removeList(todo.id)} style={{marginLeft:"10px",color:"red",curser:"pointer"}}>x</button>

    </li>
))


}


      </ul>
    </div>
  )
}

export default Deletefn
