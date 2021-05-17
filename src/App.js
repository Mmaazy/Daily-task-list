import React, {Component} from 'react'
import Plan from './plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component{

  state={
    items: [],
    text: ""
  };

  handleChange = e =>{
      this.setState({text: e.target.value})
  };

  handleAdd = e =>{
      if(this.state.text !== ""){
        const items = [...this.state.items, this.state.text];
        this.setState({items: items, text: ""});
      }
  };

  handleDelete = ids =>{
    console.log("Deleted", ids);
    const oldItems = [...this.state.items]
    console.log("Olditems", oldItems);
    const items = oldItems.filter((elements, i) =>{
      return i!==ids
    });
    console.log("Newitems", items);
    this.setState({items: items});
  }

  render(){
    return(
    <div className="jumbotron" style={{ 
      backgroundImage: `url("./images/bg.png")`,
      height: `100vh` 
    }}>
    <div className="row justify-content-md-center mt-5">
    <div className="card text-white bg-primary mb-3">
      
      <div className="card-header">
        <h1 className="text-center px-5">Plan your day with Daily planer</h1>
      </div>

    <div className="card-body">

    <div className="row">
    <div className="mb-3 col-sm-10">
        <input type="text" className="form-control" placeholder="Your Plan?" value={this.state.text} onChange={this.handleChange}/>
    </div>
      <div className=" col-sm-2">
    <button className="btn btn-dark px-4 ml-2" type="button" onClick={this.handleAdd}>Add</button>
      </div>
    
    </div>

   <ol>
     {
       this.state.items.map((value, i)=>{
         return <Plan key={i} ids={i} value={value} sendData={this.handleDelete}/>
       })
     }
   </ol>

  </div>
</div>
</div>
</div>
    )
  }
}

export default App; 