import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';


class App extends Component {


  componentWillMount(){

    this.setState({
      contacts: []
    }) // End of Set State

  } // End of componentWillMount


  handleAddContact(){
    let contacts = this.state.contacts;
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <AddContact addNewContact={this.handleAddContact.bind(this)} />
        <Contacts />
      </div>
    );
  }
}

export default App;
