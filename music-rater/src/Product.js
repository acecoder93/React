import React from 'react';
import { Media } from 'react-bootstrap'

class Product extends React.Component {
 

    render() {
        return (
            <Media>
                <h3>{this.props.data.title}</h3>

                <Media.Body>
                <p>
                {this.props.data.artist}
                {this.props.data.rating}
                {this.props.data.releaseDate}
                </p>



                </Media.Body>
              





            </Media>
            

            
        );
    }
}


Product.propTypes = {
    
};

export default Product
