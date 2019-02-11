import React, { Component } from 'react';
import Project from './components/Project';

class App extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount(){
    this.state = {
      projects: [
        {
          title: 'Dating App',
          category: 'Front-End'
        },
        {
          title: 'School CRM',
          category: 'Full-Stack'
        },
        {
          title: 'ECommerce',
          category: 'React-Redux'
        }
      ]
    }
  }



  render() {
    return (
      <div>
        <Project projects={this.state.projects} />

      </div>
    );
  }
}

export default App;
