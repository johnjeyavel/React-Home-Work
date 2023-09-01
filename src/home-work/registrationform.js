import React from "react";


function Registration(props){
    
    const post = ()=>{







        // const rollnumber1 = document.getElementById("rollnumber").value;
        // const employeename1 = document.getElementById("employeename").value;
        // const employeeid1 = document.getElementById("employeeid").value;
        

        // fetch("https://jsonplaceholder.typicode.com/posts",{
        
        // method : "POST",
        // headers: {
        // "Content-Type":"application/json"
        // },
        
        // body:JSON.stringify({
        // name : rollnumber1,
        // password: employeename1,
        // userId: employeeid1 
        // })
        // })
        
        // .then(response => response.json())
        // .then(data => {
        //     employeename1.innerHTML = data
        // })
        // .catch(error => {
        //     console.log("error",error)
        // });
        
        }

    return(
        <>

 {/* <form id="myform">

<label >enter your name </label>
<input type="text" name="name" id="name"/>


<label>enter your password </label>
<input type="password" name="password" id="password"/>


<button type="button" onClick={post} >post data
</button>

</form> */}

<button type="button" class="btn-primary" onClick={post} >New data</button>

<div class="table-responsive">
    <table class="table table-primary">
        <thead>
            <tr>
                <th scope="col">Roll No</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Id</th>
            </tr>
        </thead>
        <tbody>
     
        </tbody>
    </table>
</div>




</>
    )
}
export default Registration;