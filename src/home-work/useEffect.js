
import {useState, useEffect  } from "react";


function Effect(){
const [count, setCount] = useState(0);
const[multi,setMulti]=useState(0);

// useEffect(()=>{
// setTimeout(() => {
//     setCount((count) => count + 1)
// }, 1000);
// },[count]);

useEffect(()=>{
    setTimeout(()=>{
        setCount(()=>count+1)
        setMulti(()=>count*2)
    },1000)
},[count])

    return(
        <>  
        <p class="my-5"> count now: {count}</p>

<p>multi:{multi}</p>
        </>
    )
}
export default Effect;


{/*
import { Link, Outlet } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';

import TodoRouter from './home-work/TodoRouter';
import Counterfn from './home-work/functionCounter';
import Effect from './home-work/useEffect';



<Routes>

<Route path="useEffect" element={<Effect/>}/>
<Route path="FunctionCounter" element={<Counterfn/>}/>
<Route path="todoRouter" element={<TodoRouter/>}/>

</Routes>
<div class="fixed-top d-flex justify-content-end my-5 ">
      <Link to="useEffect" class="mx-3">useEffect</Link>
      <Link to="todoRouter" class="mx-3">  TodoRouter</Link>
      <Link to="Functioncounter" class="mx-3">FunctionCounter</Link>
      <Outlet/>
      </div> */}