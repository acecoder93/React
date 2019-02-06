import React from 'react';
import PropTypes from 'prop-types';

class MyState extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            txt: "this is a text value"
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let d = new Date();
        console.log(e);

        this.setState({
            txt: d.toTimeString()
        })
    }
    

    render() {
        return (
            <div>
                <h1>{this.state.txt}</h1>
                {/* <button onClick={this.handleClick.bind(this)}>Click Me</button> */}
                <button onClick={(e) => this.handleClick(e)}>Click Me</button>
            </div>
        )
    }

}

MyState.propTypes = {
    
};

export default MyState
