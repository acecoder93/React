import React from 'react';
import PropTypes from 'prop-types';

class AddContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameVal: "",
            emailVal: "",
            phoneVal: "",
            addressVal: "",
            cityVal: "",
            stateVal: "",
            zipCode: 12345
        }
        
    }


    handleSubmit(){

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                     <label>Name:<input type="text" value={this.state.nameVal}/></label>
                     <label>Email:<input type="text" value={this.state.emailVal}/></label>
                     <label>Phone Number:<input type="text" value={this.state.phoneVal}/></label>
                     <label>Address:<input type="text" value={this.state.addressVal}/></label>
                     <label>City:<input type="text" value={this.state.cityVal}/></label>
                     <label>State:<input type="text" value={this.state.stateVal}/></label>
                     <label>Zip Code:<input type="number" value={this.state.zipCode}/></label>

                     <input type = "submit" value = "Submit" /> 




                </form>


            </div>
        );
    }
}


AddContact.propTypes = {
    
};

export default AddContact
