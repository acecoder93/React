import React from 'react';
import PropTypes from 'prop-types';

class ContactsItems extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <ul>
                    <h3>Contact Information </h3>
                    <li>{this.props.contact.name}</li>
                    {/* <li>{this.props.contact.email}</li> */}
                    {/* <li>{this.props.contact.phone}</li> */}
                    {/* <li>{this.props.contact.address}</li> */}
                    <li>{this.props.contact.city}</li>
                    <li>{this.props.contact.state}</li>
                    {/* <li>{this.props.contact.zipcode}</li> */}
                </ul>
            </div>
            
        );
    }
}


ContactsItems.propTypes = {
    
};

export default ContactsItems
