import React, { Component } from 'react';

import Nav from './components/Nav'
import Catalog from './components/Catalog';
// import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
     <div>
       <Nav/>
       <Catalog />
       {/* <Cart /> */}
     </div>
    );
  }
}

export default App;
