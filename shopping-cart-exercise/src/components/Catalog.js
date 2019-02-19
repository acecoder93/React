import React from 'react';
import CatalogItems from './CatalogItems';
import addProduct from '../action/addProduct';
import deleteProduct from '../action/deleteProduct';
import { connect } from 'react-redux';

class Catalog extends React.Component {
    // constructor(props) {
    //     super(props);
        
    // }


    static defaultProps = {produce: [
        {name: "Apples",
        price: 5,
        description: "red"},
        {name: "Banana",
        price: 3,
        description: "un-ripened"},
        {name: "Carrot",
        price: 4,
        description: "baby"}]}

    render() {
        let products;
        products = this.props.produce.map(product=>{
            return <li key={product.name}> {product.name} {product.price} <button>Add to Cart</button></li>
        })

        return (
            <div>
                <CatalogItems products ={products}/>
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
