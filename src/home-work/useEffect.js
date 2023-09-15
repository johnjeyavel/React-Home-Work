
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