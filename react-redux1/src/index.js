import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';



class index extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <span>{this.props.currentCountInStore}</span>
                <button onClick={this.props.onIncreaseClick}>Increase</button>
            </div>
        );
    }
}





// Action (this is an object that has a "type")

const increaseAction = {
    type: "INCREASE"
}

// Setting up initial state (this can be done inline within reducer)
// Reducer or "Action Creator"
function counter(state= {count:0}, action){
    let count = state.count
    switch(action.type){
        case "INCREASE":
            return {count: count + 1}
        default:
            return state
    } // End of switch statement
} // end of counter function


// This will 
function mapDispatchToProps(dispatch){
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
}


function mapStateToProps(state){
    return {
        currentCountInStore: state.count
    }
}

// Creating store from redux

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(counter)
const store = createStore(counter)



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));

