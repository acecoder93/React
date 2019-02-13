import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      val: 0
    }
    console.log("constructor")

  }

  componentWillMount(){
    console.log("component will mount")
  }

  componentWillUnmount(){
    console.log("component unmounted");
  }
  
  update(){
    this.setState({
      val: this.state.val + 1
    })

  }


  render() {
    console.log("my app was rendered");
    return (
      <div>
        <button onClick={()=>{this.update()}}>{this.state.val * 3}</button>
      </div>
      
    );
  }


  componentDidMount(){
    console.log("component did mount")
  }
}



class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    
  }


  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick = {this.mount.bind(this)}>Mount</button>
        <button onClick = {this.unmount.bind(this)}>Unmount</button>

        <div id = "a">THIS IS DIV</div>
      </div>
      
    );
  }
}

export default Wrapper
