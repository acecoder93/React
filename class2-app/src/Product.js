import React from 'react';
import PropTypes from 'prop-types';


class Products extends React.Component{

    render() {

        // let products = ['milk', 'cheese', 'bread', 'eggs', 'chicken'];
        let productList = this.props.product.map((item)=>{
            return <li key={item}>{item}</li>
        })

        return (

            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {productList}
                </ul>



            </div>
           
        )

    }
}

Products.propTypes = {
    title: PropTypes.string

};

export default Products;
