import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// set up redux
// destructuring
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


// reducer, its a function and we when we dispatch it runs
// have one for every global variable

// state is the variable this reducer manages
const likeCounter = (state = 0, action) => {  // two params in this order, state is set as a number 0 default
    if (action.type==='ADD_LIKE'){
            console.log(`in likeCounter reducer`, action);

        return state + 1;
    }
    else if(action.type==='REMOVE_LIKE'){
            console.log(`in likeCounter reducer`, action);

    // return the updated value
    return state - 1;   // must return something
    }

    return state;
}

const cerealList = (state = [], action) => {
    console.log(`in cerealList reducer`, action);
    if(action.type==='ADD_CEREAL'){
        return [...state, action.payload]
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
    likeCounter,   //short hand creates key value pair with variable name as key and variable value as value
    cerealList,

    })
);

ReactDOM.render(<Provider store={storeInstance}>
                    <App />
                </Provider>, 
    document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
