import React, { Component }  from 'react';
import "./counter.css"


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      quantity:0,
      quantity1:0,
      quantity2:0,
      quantity3:0// Initial state
    };
  }

  increment = () => {
    
    this.setState({ count: this.state.count + 1 });
  };

  increment1 = () => {
    
    this.setState({ count1: this.state.count + 1 });
  };

  increment2 = () => {
    
    this.setState({ count2: this.state.count + 1 });
  };
  
  increment3 = () => {
    
    this.setState({ count3: this.state.count + 1 });
  };


incrementreset = () => {
    
    this.setState({ count: this.state.count = 0 });
  };





  quantityinc =()=>{
    this.setState({quantity: this.state.quantity+ 1});
  };
  
  quantityinc1=()=>{
  this.setState({quantity1: this.state.quantity1 + 1});
  }

  quantityinc2=()=>{
    this.setState({quantity2: this.state.quantity2 + 1});
    }

    quantityinc3=()=>{
      this.setState({quantity3: this.state.quantity3 + 1});
      }


      quantitydec = ()=>{
        this.setState({quantity: this.state.quantity - 1})
      }
      
      
      quantitydec1 = ()=>{
        this.setState({quantity1: this.state.quantity1 - 1})
      }
      
      
      quantitydec2 = ()=>{
        this.setState({quantity2: this.state.quantity2 - 1})
      }
      
      
      quantitydec3 = ()=>{
        this.setState({quantity3: this.state.quantity3 - 1})
      }


quantityreset = ()=>{
  this.setState({quantity: this.state.quantity = 0})
}


quantityreset1 = ()=>{
  this.setState({quantity1: this.state.quantity1 = 0})
}


quantityreset2 = ()=>{
  this.setState({quantity2: this.state.quantity2 = 0})
}


quantityreset3 = ()=>{
  this.setState({quantity3: this.state.quantity3 = 0})
}

  render() {
    return (
      <>


<button class="addedlist">added list:{this.state.count}<i class="fa-solid fa-tag"></i></button>

<div class="container row  text-center space ">   
<div class="card  row ">
  <img src="https://mylayby.co.nz/media/catalog/product/cache/f3909c84cc0b01542da25634e4effa6c/5/2/521878.jpg" class="card-img-top" alt="card-image"/>
  <div class="card-body">
    <h4 class="card-title">smart watch</h4>
    <h3 class="green">Rs:28999</h3>
<p class="red">Rs:29999</p>

<div>
<h3>quantity: {this.state.quantity}</h3>
        <button onClick={this.quantityinc} class="btn">+</button>
        <button onClick={this.quantityreset} class="btn"><i class="fa-solid fa-rotate"></i></button>
        <button onClick={this.quantitydec} class="btn">-</button>
</div>
  <button onClick={this.increment} class="btn btn-primary">add your list</button>
    <button onClick={this.incrementreset}  class="btn btn-primary"><i class="fa-solid fa-rotate"></i></button>
  </div>

</div>
  



<div class="card row">
  <img src="https://mylayby.co.nz/media/catalog/product/cache/f3909c84cc0b01542da25634e4effa6c/5/2/521878.jpg" class="card-img-top" alt="card-image"/>
  <div class="card-body">
    <h4 class="card-title">smart watch</h4>
    <h3 class="green">Rs:28999</h3>
<p class="red">Rs:29999</p>

<div>
<h3>quantity: {this.state.quantity1}</h3>
        <button onClick={this.quantityinc1} class="btn">+</button>
        <button onClick={this.quantityreset1} class="btn"><i class="fa-solid fa-rotate"></i></button>
        <button onClick={this.quantitydec1} class="btn">-</button>
</div>
  <button onClick={this.increment1} class="btn btn-primary">add your list</button>
    <button onClick={this.incrementreset}  class="btn btn-primary"><i class="fa-solid fa-rotate"></i></button>
  </div>

</div>





<div class="card row">
  <img src="https://mylayby.co.nz/media/catalog/product/cache/f3909c84cc0b01542da25634e4effa6c/5/2/521878.jpg" class="card-img-top" alt="card-image"/>
  <div class="card-body">
    <h4 class="card-title">smart watch</h4>
    <h3 class="green">Rs:28999</h3>
<p class="red">Rs:29999</p>

<div>
<h3>quantity: {this.state.quantity2}</h3>
        <button onClick={this.quantityinc2} class="btn">+</button>
        <button onClick={this.quantityreset2} class="btn"><i class="fa-solid fa-rotate"></i></button>
        <button onClick={this.quantitydec2} class="btn">-</button>
</div>
  <button onClick={this.increment2} class="btn btn-primary">add your list</button>
    <button onClick={this.incrementreset}  class="btn btn-primary"><i class="fa-solid fa-rotate"></i></button>
  </div>

</div>





<div class="card row">
  <img src="https://mylayby.co.nz/media/catalog/product/cache/f3909c84cc0b01542da25634e4effa6c/5/2/521878.jpg" class="card-img-top" alt="card-image"/>
  <div class="card-body">
    <h4 class="card-title">smart watch</h4>
    <h3 class="green">Rs:28999</h3>
<p class="red">Rs:29999</p>

<div>
<h3>quantity: {this.state.quantity3}</h3>
        <button onClick={this.quantityinc3} class="btn">+</button>
        <button onClick={this.quantityreset3} class="btn"><i class="fa-solid fa-rotate"></i></button>
        <button onClick={this.quantitydec3} class="btn">-</button>
</div>
  <button onClick={this.increment3} class="btn btn-primary">add your list</button>
    <button onClick={this.incrementreset}  class="btn btn-primary"><i class="fa-solid fa-rotate"></i></button>
  </div>

</div>

</div>



</>
)
}

}


export default Counter;


