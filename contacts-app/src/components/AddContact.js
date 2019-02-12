import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

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
            zipCodeVal: 12345,
            newProject: {}
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

    handleSubmit(e){
        e.preventDefault();

        if (this.refs.name.value=== ""){
            alert('Name is required');
        } 
        else if (this.refs.email.value === ""){
            alert('Email is required');
        }
        else if (this.refs.phone.value === ""){
            alert ('Phone Number is required');
        }
        else if (this.refs.address.value === ""){
            alert ('Address information is required');
        }
        else if (this.refs.city.value === ""){
            alert ('City information is required');
        }
        else if (this.refs.state.value === ""){
            alert ('State information is required');
        }
        else if (this.refs.zip.value === ""){
            alert ('Zip Code information is required')
        }
        else {
        alert('The contact information you have provided has been submitted')
            this.setState({
                newProject:{
                    id: uuid.v4(),
                    name: this.refs.name.value,
                    email: this.refs.email.value,
                    phone: this.refs.phone.value,
                    address: this.refs.address.value,
                    city: this.refs.city.value,
                    state: this.refs.state.value,
                    zipcode: this.refs.zip.value
                }}, ()=>{
                console.log(this.state.newProject);
                this.props.addNewContact(this.state.newProject);
            })

        }

    }

    render() {
        return (
            <div>
                <h3>Add New Contact Here</h3>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name:<input type="text" ref="name" value={this.state.nameVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Email:<input type="text" ref="email" value={this.state.emailVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Phone Number:<input type="text" ref="phone" value={this.state.phoneVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Address:<input type="text" ref="address" value={this.state.addressVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>City:<input type="text" ref="city" value={this.state.cityVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>State:<input type="text" ref="state" value={this.state.stateVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <label>Zip Code:<input type="number" ref="zip" value={this.state.zipCodeVal} onChange={this.handleChange.bind(this)}/></label> <br/>
                    <input type = "submit" value = "Add Contact" /> 

                </form>


            </div>
        );
    }
}


AddContact.propTypes = {
    
};

export default AddContact
