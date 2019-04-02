import React, { Component } from 'react';
import { connect } from 'react-redux';        
        
class LikeCounter extends Component {

    addLike = () => {
        // tell redux to do something
        let action = {
            type: 'ADD_LIKE'
        };
        this.props.dispatch(action); //dispatch an action
    };

    unLike = () => {
        let action = {
            type: 'REMOVE_LIKE'
        };
        this.props.dispatch(action);
    };

    render(){
        return(
        <section>
            <button onClick={this.addLike}>Do it</button>
            <h2>{this.props.reduxState.likeCounter}</h2>
            <button onClick={this.unLike}>Unlike</button>
        </section>
        );

    };
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState, //short hand creates key value pair with variable name as key and variable value as value
});

// connect this componenet to our global provider/store
export default connect(mapReduxStateToProps)(LikeCounter);