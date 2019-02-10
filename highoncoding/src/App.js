import React, { Component } from 'react';
import Nav from './components/Nav'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div>
        <Nav homeButton={"home"} category={"categories"} />
        <Body />
      </div>
    );
  }
}

export default App;
