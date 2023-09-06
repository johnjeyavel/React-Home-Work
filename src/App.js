
  import { useState, useEffect } from "react";

function App() {
 
const[count,setCount] = useState(1);
const[calculation,setCalculation] = useState(0);


useEffect(()=>{
  setCalculation(() => count*2)
},[count])



  return (

<>
<p>count:{count}</p>
<button onClick={() => setCount((c) => c + 1) }>+</button>
<p>calculation:{calculation}</p>
</>



  );
}



export default App;