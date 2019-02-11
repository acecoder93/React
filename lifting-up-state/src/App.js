import React from 'react';
import PropTypes from 'prop-types';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      click: 0
    }
    
  }


  updateClickCount(){
    this.setState({
      click: this.state.click + 1
    })
  }

  reset(){
    this.setState({
      click: 0
    })
  }

  render() {
    return (
      <div>
        <H1 />
        <H2 clickCount={this.state.click} resetter={this.reset.bind(this)} />
        {/* Sending down a key "onClickProp" with function "updateClickCount" */}
        <H3 onClickProp={this.updateClickCount.bind(this)} />

      </div>
      
    );
  }
}


App.propTypes = {
  
};

export default App
