import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

  state = {
    newName: '',
  }

  handleChange =(event) =>{
    this.setState({
      newName: event.target.value,
    })
  }

  addLike = () =>{
    // tell redux to do something
    let action = { type: 'ADD_LIKE' };
    this.props.dispatch( action );  //dispatch an action
  }

  unlike = () => {
    let action = {type: 'REMOVE_LIKE'};
    this.props.dispatch(action);
  }

  addCereal = (event) => {
    let action = { type: 'ADD_CEREAL', payload: this.state.newName }
    this.props.dispatch(action)
  }

  render() {
    
    return (
      <div className="App">
        <h1>Redux!!</h1>
        <p>{JSON.stringify(this.props)}</p>
        <button onClick={this.addLike}>Do it</button>
        <h2>{this.props.reduxState.likeCounter}</h2>
        <button onClick={this.unlike}>Unlike</button>
        <section>
          <input type="text" onChange={this.handleChange}/>
          <button onClick={this.addCereal}>Add</button>
        </section>
      </div>
    );
  }
}

// adds every reducer vairable to this.props.reduxState
const mapReduxStateToProps = (reduxState) => ({
  reduxState,         //short hand creates key value pair with variable name as key and variable value as value
})

// connect this componenet to our global provider/store
export default connect(mapReduxStateToProps)(App);
