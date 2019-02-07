import React from 'react';
import PropTypes from 'prop-types';
import { Media } from 'react-bootstrap';
import Products from './Products'


class Product extends React.Component {
    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <div>
            <Media>
                <Media.Left>
                    <img src={this.props.data.imageUrl} width={64} height={64} alt=""></img>
                </Media.Left>

                <Media.Body>
                    <Media.Heading>
                        {this.props.data.productName}
                    </Media.Heading>
                        {this.props.data.releaseDate}
                        <p>{this.props.data.description}</p>

                </Media.Body>
            </Media>;
        </div>

        );
    }
}


Product.propTypes = {
    
};

export default Product
