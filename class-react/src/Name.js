import React, { Component } from 'react';

class Name extends Component {

    printFormat(name){
        return ( "My first name is " + name.first + "." + " My last name is " + name.last + ".");

    };

    render(){
        let myName  = {first: 'Anuj', last: 'Saheba'};

        return(
            <div>
            {this.printFormat(myName)}
            </div>
        );
    };
};

export default Name;