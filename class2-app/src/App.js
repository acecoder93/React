import React, { Component } from 'react';
import Products from './Product';
import MyState from './myState'
class App extends Component {
  render() {
    let products = ['milk', 'cheese', 'bread', 'eggs', 'chicken'];




    return (
      <div>
        <Products title="My Grocery List" product ={products} /> 
        <MyState />   
      </div>
    );
  }
}

export default App;
