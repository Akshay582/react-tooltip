import React, { Component } from 'react';
// import './App.css';
import Tooltip from '../components/Tooltip';
import Position from '../components/Position';

class App extends Component {
  constructor(){
    super();
    this.state = {
      value: []
    }
  }
  handlePosition = posArray => {
    this.setState({value: posArray});
  }
  render() {
    return (
      <div className="App">
        <Position
        onSelectPosition={this.handlePosition}/>
        <Tooltip
        positionPassed={this.state.value}/>
      </div>
    )
  }
}

export default App;
