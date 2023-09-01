import React,{Component} from "react";


class Change extends React.Component{

constructor(props){
    super(props);
    this.state={
       inputValue : "",
       passwordIs : "",
    }
}

clickChange = event => {
    this.setState({inputValue: event.target.value})
}


passwordChange = event => {
    this.setState({passwordIs: event.target.value})
}


showPassword = ()=>{
    this.setState({passwordIs1: this.state.passwordIs})
  }
  



    render(){
        return(
        <>
        <h1>onchange function</h1>
        <input  type="text"  onChange={this.clickChange}/>   
        
        <input type="password" onChange={this.passwordChange} />
         <button  onClick={this.showPassword}>click</button>
    
    <p>input Value:{this.state.inputValue}</p>
<p>your password is:{this.state.passwordIs1}</p> 


        </>
    )
}}
export default Change; 
