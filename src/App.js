import React, { Component } from 'react';
import './App.css';
import Circles from './Circles'
import CircleSelector from './CircleSelector'
import './Circles.css'
import './CircleSelector.css'

class App extends Component {


  state= {
    selCircle: 1
  };

  handleClick = (selCircle) => {
    this.setState({selCircle});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          handleClick={this.handleClick} 
          selCircle={this.state.selCircle} />
          <Circles selCircle={this.state.selCircle} />
        </main>
      </div>
    );
  }
}

export default App;
