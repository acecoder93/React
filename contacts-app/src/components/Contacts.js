import React from 'react';
import PropTypes from 'prop-types';
import ContactsItems from './ContactsItems';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let contactItems;

        
        console.log(this.props.fullContactList) // Props of full list DO transfer

        if(this.props.fullContactList){
            contactItems = this.props.fullContactList.map((item)=>{
                return <ContactsItems contact ={item} />
    
            })
            console.log(contactItems) // issue with list; doesn't show contents but array expands
        }

        return (
            <div>{contactItems}</div>
            
        );
    }
}


Contacts.propTypes = {
    
};

export default Contacts
