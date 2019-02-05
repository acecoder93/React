import React, { Component } from 'react';
import Name from './Name'

class Products extends Component {
    printProduct(product){

        return "product Name: " + product.itemName + " " + product.model
      }



    render(){
        let myProduct = {itemName: 'computer', model: 'macbook pro'}
        let myMessage = "my product list "
        return(
            <div>
                {myMessage}<br/>
                <Name />
                Hello World: I'm inside of the Products.js file <br/>
                {this.props.productName}<br/>
                {this.props.productID}<br/>
                {this.printProduct(myProduct)}
            </div>
        )
    }
}

export default Products;