import './App.css';
import  {connect} from 'react-redux';
import * as actionCreators from './action/actionCreators';
import React,{Component} from 'react'

class App extends Component{
  render(){
  return (
    <div className="app">
      <h1>Redux INC_DEC</h1>
      <div className="app__inc_dec">
        <button onClick={this.props.decrement}>-</button>
        <input type="text" value={this.props.counter} onChange={this.props.value}/>
        <button onClick={this.props.increment}>+</button>
      </div>
    </div>
  );
  }
}

const mapStateToProps=(state)=>{
  return {
    counter:state.reducer
  }
}

const mapDispatchToProps= (dispatch) =>{
  return{
    increment: ()=>dispatch(actionCreators.incCounter()),
    decrement: () => dispatch(actionCreators.decCounter()),
    value: (e) => dispatch(actionCreators.addValue(e))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
