import React from 'react';
import PropTypes from 'prop-types';

class H2 extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <h2>(Sibling) Click Counter: {this.props.clickCount}</h2>

                <button onClick={()=>{this.props.resetter()}}>Reset</button>
            </div>
        );
    }
}


H2.propTypes = {
    
};

export default H2
