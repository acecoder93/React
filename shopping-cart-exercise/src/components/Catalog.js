import React from 'react';
import CatalogItems from './CatalogItems';
import addProduct from '../action/addProduct';
import deleteProduct from '../action/deleteProduct';
import { connect } from 'react-redux';

class Catalog extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }


    static defaultProps = {
        
    }

    render() {

        return (
            <div>


                <CatalogItems />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAddProduct: (productData) => dispatch(addProduct(productData)),
        onDeleteProduct: (productData) => dispatch(deleteProduct(productData))
}
}





export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
