import React from 'react';
import PropTypes from 'prop-types';
import H1 from './components/H1';
import H2 from './components/H2';
import H3 from './components/H3';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <H1 />
        <H2 />
        <H3 />

      </div>
      
    );
  }
}


App.propTypes = {
  
};

export default App
