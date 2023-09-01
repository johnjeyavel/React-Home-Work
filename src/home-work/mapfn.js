import React from "react";


function Array(props){

    const Arr =[ 'red', 'bule', 'block', 'white']

return(
    <>
    
<ul>
    {Arr.map((item, index) =>(
        <li key={index}>{item} </li>
    ))}
 </ul>


    </>
)

}
export default Array;