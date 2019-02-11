import React from 'react';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleDelete(){
        console.log('Hello World');

    }

    render() {
        return (
                <li>
                    <strong>{this.props.project.category}</strong>
                    {this.props.project.title}
                    <a href="#" onClick={this.handleDelete.bind(this)}>X</a>

                </li>

        );
    }
}




export default ProjectItem
