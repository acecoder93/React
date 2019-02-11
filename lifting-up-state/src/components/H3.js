import React from 'react';
import PropTypes from 'prop-types';

class H3 extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.props.onClickProp()}>Submit</button>
            </div>
            
        );
    }
}


H3.propTypes = {
    
};

export default H3
