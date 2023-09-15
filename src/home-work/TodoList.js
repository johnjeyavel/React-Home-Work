import React,{Component} from "react";
import "./newTable.css"

class Table extends React.Component{

constructor(props){
    super(props);
    this.state={
        changeValue:"",
        changedValue :[],
        editValue:-1,
        editedValue:""
    }
}

clickChange = event=>{
    this.setState({changeValue: event.target.value})
}

addListItem = ()=>{
    const{changeValue,changedValue}=this.state;
    if(changeValue !== ""){
this.setState({
    changedValue:[...changedValue,changeValue],
    changeValue:"",
});
    }
    else{
        alert("error: type something")
    }
};


deleteNow = (itemindex)=>{
const{changedValue}=this.state;

 this.setState({changedValue:  changedValue.filter((v,i) => i !== itemindex)})
}


editNow = (itemindex)=>{
    this.setState ({
        editValue:itemindex,
        editedValue:this.state.changedValue[itemindex]
    })
}




editSaveNow = (itemindex)=>{
const{changedValue,editedValue}=this.state;

const changedValue1 = changedValue.map((itemvalue,i)=>
i === itemindex? editedValue :itemvalue);

this.setState({
changedValue : changedValue1,
editValue:-1,
editedValue:""
})
}


// editedValues = event => {
//    this.setState ({editedValue: event.target.value})
// }


render(){
const{changedValue,changeValue,editedValue}=this.state;

    return(
        <>
        <div class="text-center ">
           <h1 class="text-center " >Add Todo</h1><br/><br/>
    <input type="text" value={changeValue} onChange={this.clickChange} class=" shadow-lg p-2 mb-5 bg-body rounded col-5 border border-4 mx-5"/>    

    <button onClick={this.addListItem} class="shadow-lg p-2 mb-5  rounded col-1 btn-primary fw-bold">Add</button><hr/>
        
      <ul>
        {changedValue.map((itemvalue,itemindex)=>(
            <li key={itemindex} > 
            {this.state.editValue === itemindex?(<>
            <input type="text" value={editedValue} onChange={(e)=>this.setState({editedValue:e.target.value})} class="  span1  mx-5"/>
            <button onClick={()=>this.editSaveNow(itemindex)} class=" rounded col-1 btn-primary fw-bold mx-5">save</button><hr/>
            </>):
       (<>
       <span > {itemvalue}</span>        

            <button onClick={() => this.deleteNow(itemindex)} class=" rounded col-1 btn-primary fw-bold mx-4">delete</button>
         <button onClick={()=> this.editNow(itemindex)} class="  rounded col-1 btn-primary fw-bold">Edit</button><hr/>
         </>)}
            </li>
))}


        </ul>  
        </div>
        </>
    )
}
}
export default Table;