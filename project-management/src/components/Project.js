import React from 'react';
import ProjectItem from './ProjectItem';

class Project extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let projectItems;

        if (this.props.projects){
            projectItems =  this.props.projects.map((item)=>{
                // Returning the value back into a new array
                return <ProjectItem project = {item} />

            })
        }




        return (
            <div>
                
                {projectItems}

            </div>

        );
    }
}




export default Project
