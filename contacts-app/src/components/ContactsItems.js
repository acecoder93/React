import React from 'react';
import PropTypes from 'prop-types';

class ContactsItems extends React.Component {
    constructor(props) {
        super(props);
        
    }
    

    handleDelete(id){

        this.props.onDelete(id)

    }

    render() {
        return (
            <div>
                <ul>
                    <h3>Contact Information </h3>
                    <a href="#" onClick={this.handleDelete.bind(this, this.props.contact.id)}>X</a>
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
