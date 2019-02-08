import React from 'react';
import { Media } from 'react-bootstrap';
// import Ratings from './Ratings'
// import PropTypes from 'prop-types';

class Product extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                    <Media>

                    <Media.Body>
                        <h5>{this.props.data.title}</h5>
                        <img width={64} height={64} alt="" src={this.props.data.image}></img>
                        <h3>{this.props.data.price}</h3>
                        <p>
                        <br></br>
                        {this.props.data.brand}
                        {this.props.data.description}
                        {/* <Ratings rating = {this.props.data.rating} /> */}

                        </p>
                    </Media.Body>
                    </Media>

            </div>
        )
    }
}


Product.propTypes = {
    
};

export default Product
