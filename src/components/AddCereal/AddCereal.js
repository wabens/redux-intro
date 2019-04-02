import React, { Component } from 'react';
import { connect } from 'react-redux';        
        
class AddCereal extends Component {
      state = {
          newName: '',
      }

    handleChange =(event) =>{
        this.setState({
        newName: event.target.value,
        })
    }

    addCereal = (event) => {
        let action = {
            type: 'ADD_CEREAL',
            payload: this.state.newName
        }
        this.props.dispatch(action)
        this.setState({
            newName: '',
          })

      }
    render(){
        return(
            <section>
                <h2>Add Cereal</h2>
                <input type="text" onChange={this.handleChange} value={this.state.newName}/>
                <button onClick={this.addCereal}>Add</button>
            </section>
        );

    };
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState, //short hand creates key value pair with variable name as key and variable value as value
});

// connect this componenet to our global provider/store
export default connect(mapReduxStateToProps)(AddCereal);