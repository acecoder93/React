import React from 'react';
import addProduct from '../action/addProduct';

class CatalogItems extends React.Component {


    render() {
        return (
            <div>
                {this.props.products}
            </div>
        );
    }
}




export default CatalogItems
