import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box">
        <input type='text' placeholder="Title"/>
        <input type='text' placeholder="Task"/>
        <button>Enter</button>
        </div>
      </div>
    );
  }
}

export default App;
