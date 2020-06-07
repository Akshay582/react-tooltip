import React, { Component } from 'react';
// import './App.css';
import Window from '../components/Window';
import Position from '../components/Position';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: []
    }
  }
  handlePosition = posArray => {
    this.setState( { value: posArray } );
  }
  render() {
    return (
      <div className="App">
        <Position
          onSelectPosition={this.handlePosition} />
        <Window
          positionPassed={this.state.value} />
      </div>
    )
  }
}

export default App;
