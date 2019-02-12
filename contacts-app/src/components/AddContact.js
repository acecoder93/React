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
            zipCodeVal: 12345
        }
        
    }

    handleChange(e){
        this.setState({
            nameVal: e.target.nameVal,
            emailVal: e.target.emailVal,
            phoneVal: e.target.phoneVal,
            addressVal: e.target.addressVal,
            cityVal: e.target.cityVal,
            stateVal: e.target.stateVal,
            zipCodeVal: e.target.zipCodeVal
       
        })


    }

    handleSubmit(){
        alert('The contact information you have provided has been submitted')

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name:<input type="text" value={this.state.nameVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Email:<input type="text" value={this.state.emailVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Phone Number:<input type="text" value={this.state.phoneVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Address:<input type="text" value={this.state.addressVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>City:<input type="text" value={this.state.cityVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>State:<input type="text" value={this.state.stateVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Zip Code:<input type="number" value={this.state.zipCodeVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <input type = "submit" value = "Add Contact" /> 

                </form>


            </div>
        );
    }
}


AddContact.propTypes = {
    
};

export default AddContact
