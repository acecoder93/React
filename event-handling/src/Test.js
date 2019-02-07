import React from 'react';
import PropTypes from 'prop-types';

class Test extends React.Component {
    constructor(props) {
        super(props);

        // Setting State
        this.state = {
            msg: "this is a sample message",
            counter: 9
        }
        
    }

    handleEvent(e){
        // let d = new Date();
        let newCount = this.state.counter + 1;
        // This.setState takes two arguments (new state and callback)
        this.setState({
            msg: "new state",
            counter : newCount


        })

    }

    render() {
        return (
            <div>
                {this.state.msg}
                {this.state.counter}
                {/* <button onClick={this.handleEvent.bind(this)}>Submit</button> */}
                {/* Arrow function below is auto-binding */}
                {/* <button onClick={(e)=>{this.handleEvent(e)}}>Submit</button> */}



            </div>

            
        );
    }
}


Test.propTypes = {
    
};

export default Test
