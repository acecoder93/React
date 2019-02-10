import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" >
                    Primary
                </Button>
                <div>Count</div>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>



            </div>
        )
    }
}
