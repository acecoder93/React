import React from 'react';
import PropTypes from 'prop-types';
import ContactsItems from './ContactsItems';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let contactItems;

        
        console.log(this.props.fullContactList) 

        if(this.props.fullContactList){
            contactItems = this.props.fullContactList.map((item)=>{
                return <ContactsItems contact ={item} />
    
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
