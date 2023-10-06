  import React, { useState } from 'react'
  import Modal from 'react-modal';

// const user = {id:null,name:"",age:"",gmail:"",genter:""}

// model package ....
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"gray",
    color:"white",
    borderRadious:"10px", 
  },
};



const ReactFormex = () => {

// const valueAll = [idV,nameV,ageV,gmailV,genderV]  

const[idV,setIdV]=useState("")
const[nameV,setNameV]=useState("")
const[ageV,setAgeV]=useState("")
const[gmailV,setGmailV]=useState("")
const[genderV,setGenderV]=useState("")
const[idV1,setIdV1]=useState([])
const[nameV1,setNameV1]=useState([])
const[ageV1,setAgeV1]=useState([])
const[gmailV1,setGmailV1]=useState([])
const[genderV1,setGenderV1]=useState([])
// const[valueAll,setValueAll]=useState([-1])
// model package start....
let subtitle;
const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  subtitle.style.color = 'white';
}

function closeModal(e) {
  setIsOpen(false);

  e.preventDefault();
setNameV1([...nameV1,nameV]);
setNameV("");
setIdV1([...idV1,idV]);
setIdV("");
setAgeV1([...ageV1,ageV]);
setAgeV("");
setGmailV1([...gmailV1,gmailV]);
setGmailV("");
setGenderV1([...genderV1,genderV]);
setGenderV("");
// setValueAll1(valueAll);
}


  
const deleteNow = (index1) =>{
  gmailV1.filter((v,i)=> i !== index1 )
  }
// model package end....




// const valuesubmit=(e)=>{
// e.preventDefault();
// setNameV1(nameV);
// setNameV("");
// setidV1(idV);
// setidV("");
// setAgeV1(ageV);
// setAgeV("");
// setGmailV1(gmailV);
// setGmailV("");
// }


  return (
    <div>

    <button ref={(_subtitle) => (subtitle = _subtitle)} onClick={openModal} class="openmodal btn-primary ">Add</button>  
          
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

    <form class="container my-5 text-center" onSubmit={closeModal}>

    <label for="id">Student ID</label>   <br/>
    <input type='number' placeholder='Enter student id' onChange={(e)=>setIdV(e.target.value)} required /><br/> <br/>
    <label for="text">Student NAME</label>   <br/>
    <input type='text' placeholder='Enter student name'  onChange={(e)=>setNameV(e.target.value)}  required/><br/> <br/>
    <label for="text">Enter Age</label>   <br/>
    <input type='number' placeholder='Enter student age'  onChange={(e)=>setAgeV(e.target.value)}  required/><br/> <br/>
    <label for="text">Enter Gmail</label>   <br/>
    <input type='gmail' placeholder='Enter student gmail'  onChange={(e)=>setGmailV(e.target.value)}  required/><br/> <br/>

    <label for="text">Enter Gender</label> <br/>
    <input type='text' placeholder='Enter student Gender'  onChange={(e)=>setGenderV(e.target.value)}  required/><br/> <br/>

    <input type='submit'/>

    </form>

    </Modal>



    {/* Table start ......*/}

    <div class="table-responsive">
      <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">Student ID</th>
            <th scope="col">Student NAME</th>
            <th scope="col">Student Age</th>
            <th scope="col">Student Gmail</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>{idV1.map((item)=>(
              <p>{item}</p>
    ))}</td>
            <td>{nameV1.map((item1)=>(
              <p>{item1}</p>
    ))}</td>
            <td>{ageV1.map((item2)=>(
              <p>{item2}</p>
    ))}</td>
            <td>{gmailV1.map((item3)=>(
              <p>{item3}</p>
    ))}</td>
                  <td>{genderV1.map((item4,index1)=>(
              <span key={index1}>{item4}
              <button onClick={()=>deleteNow(index1)}>Delete</button>
              </span>              
    ))}        
    </td>

          </tr>

        </tbody>
      </table>
    </div>


    </div>
  )
}

export default ReactFormex
