import React, { Component } from 'react';
import { connect } from 'react-redux';

class CerealList extends Component {

  render() {
    
    return (
        <section>
          <h2>List of cereal</h2>
          <ul>
            {this.props.reduxState.cerealList.map(cereal => <li key={cereal}>{cereal}</li>)}
          </ul>
        </section>
    );
  }
}

// adds every reducer vairable to this.props.reduxState
const mapReduxStateToProps = (reduxState) => ({
  reduxState,         //short hand creates key value pair with variable name as key and variable value as value
})

// connect this componenet to our global provider/store
export default connect(mapReduxStateToProps)(CerealList);
