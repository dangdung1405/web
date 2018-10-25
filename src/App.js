import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

const data = [
  {
    name: 'Huy',
    anh: '1',
    age: 23
  },
  {
    name: 'Dung',
    anh: '3',
    age: 20
  },
  {
    name: 'Tuan',
    anh: '4',
    age: 22
  }
];

class App extends Component {

  getGreeting(user) {
    if (user) {
      return <h1>Hello, {user}!</h1>;
    }
    return <h1>Hello, Stranger...</h1>;
  }
  welcome(name) {
    return <h1>welcome, {name}</h1>;
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>name</th>
            <th>anh</th>
            <th>Age</th>
          </tr>
          <ListItem data={data} dung='1' />
        </table>
      </div>

    );
  }
}

export default App;
