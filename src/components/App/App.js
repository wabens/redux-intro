import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import LikeCounter from '../LikeCounter/LikeCounter';
import AddCereal from '../AddCereal/AddCereal';
import CerealList from '../CerealList/CerealList'

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <h1>Redux!!</h1>
        <p>{JSON.stringify(this.props)}</p>
        <LikeCounter />
        <AddCereal />
        <CerealList />
        {/* <section>
          <h2>List of cereal</h2>
          <ul>
            {this.props.reduxState.cerealList.map(cereal => <li key={cereal}>{cereal}</li>)}
          </ul>
        </section> */}
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
