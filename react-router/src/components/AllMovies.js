import React from 'react';
import PropTypes from 'prop-types';

class AllMovies extends React.Component {
    constructor(props) {
        super(props);

        // This is a list of all of the links
        this.history = props.history;


        // Bindings
        this.navToHome = this.navToHome.bind(this);
        
    }

    navToHome(){
        this.history.push('/');
    }

    render() {
        return (
            <div>
                AllMovies
                <button onClick={this.navToHome}>Home</button>
            </div>
            
        );
    }
}


AllMovies.propTypes = {
    
};

export default AllMovies
