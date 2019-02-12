import React from 'react';
import PropTypes from 'prop-types';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {


        let contactItems = this.props.contactList
        console.log('thisiscontactspage');
        console.log(contactItems)


        return (
            <div>Contacts</div>
            
        );
    }
}


Contacts.propTypes = {
    
};

export default Contacts
