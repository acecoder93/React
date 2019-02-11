import React from 'react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        
    }

    handleForm(e){
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();

        }


    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                Value: {this.state.value}

                <form onSubmit={this.handleForm.bind(this)} >
                    Enter some text <input type="text" onChange={(e)=>{this.handleChange(e)}}/> 
                    <input type="submit" value="Submit" />
                </form>
            </div>    
            
        );
    }
}


Forms.propTypes = {
    
};

export default Forms
