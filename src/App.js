import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import BasicComponent from './components/BasicComponent'
import Name from './components/Name'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Profile Workshop</h2>
        </div>

        <div className="App-intro">
          Hello, <Name class='inline' name="MC HAMMERRRRRR"/>
        </div>

      </div>
    );
  }
}

export default App;
