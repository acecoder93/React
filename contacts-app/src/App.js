import React, { Component } from 'react';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import uuid from 'uuid';


class App extends Component {


  componentWillMount(){

    this.state = {
      contacts: [
        {
          id: uuid.v4(),
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "777-777-7777",
          address: "1800 John Doe Drive",
          city: "Houston",
          state: "Texas",
          zipcode: 77082
        }
      ] // End of contacts array
    }

  } // End of componentWillMount


  handleAddContact(newContact){
    let list = this.state.contacts;
    list.push(newContact);

    this.setState({
      contacts: list
    })
  }

  handleDeleteContact(id){
    let list = this.state.contacts;
    let index = list.findIndex(x => x.id === id);


    console.log(index);

    list.splice(index, 1);

    this.setState({
      contacts: list
    })



  }
  

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <AddContact addNewContact={this.handleAddContact.bind(this)} onDelete={this.handleDeleteContact.bind(this)} />
        <Contacts fullContactList={this.state.contacts} />
      </div>
    );
  }
}

export default App;
