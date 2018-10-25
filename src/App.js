import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  render() {
    return (
      <div className="App">
        {this.getGreeting()}
      </div>
    );
  }
}

export default App;
