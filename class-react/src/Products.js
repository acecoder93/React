import React, { Component } from 'react';

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
                Hello World: I'm inside of the Products.js file <br/>
                {this.printProduct(myProduct)}
            </div>
        )
    }
}

export default Products;