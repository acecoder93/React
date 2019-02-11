import React from 'react';

class ProjectItem extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
                <li>
                    <strong>{this.props.project.category}</strong>
                    {this.props.project.title}

                </li>

        );
    }
}




export default ProjectItem
