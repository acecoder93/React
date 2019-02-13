import React from 'react';

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




App.propTypes = {
  
};

export default App
