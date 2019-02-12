import React from 'react';
import PropTypes from 'prop-types';
import ContactsItems from './ContactsItems';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        
    }

    deleteContact(id){
        this.props.onDelete(id);
    }

    render() {
        let contactItems;

        
        console.log(this.props.fullContactList) 

        if(this.props.fullContactList){
            contactItems = this.props.fullContactList.map((item)=>{
                return <ContactsItems contact ={item} onDelete={this.deleteContact.bind(this)} />
    
            })
            console.log(contactItems) 
        }

        return (
            <div>{contactItems}</div>
            
        );
    }
}


Contacts.propTypes = {
    
};

export default Contacts
