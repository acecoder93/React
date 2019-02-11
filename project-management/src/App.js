import React, { Component } from 'react';
import Project from './components/Project';
import AddProject from './components/AddProject';
import uuid from 'uuid';

class App extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.state = {
      projects: [
        {
          id: uuid.v4(),
          title: 'Dating App',
          category: 'Front-End'
        },
        {
          id: uuid.v4(),
          title: 'School CRM',
          category: 'Full-Stack'
        },
        {
          id: uuid.v4(),
          title: 'ECommerce',
          category: 'React-Redux'
        }
      ]
    }
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects})
  }



  render() {
    return (
      <div>
        <Project projects={this.state.projects} />
        <AddProject addProject={this.handleAddProject.bind(this)}   />

      </div>
    );
  }
}

export default App;
