import React, { Component } from 'react';
// import './App.css';
import Window from '../components/Window';
import SelectionInput from '../components/SelectionInput';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: []
    }
  }
  handleSelectionInput = posArray => {
    this.setState( { value: posArray } );
  }
  render() {
    return (
      <div className="App">
        <SelectionInput
          onSelectInput={this.handleSelectionInput} />
        <Window
          positionPassed={this.state.value} />
      </div>
    )
  }
}

export default App;
