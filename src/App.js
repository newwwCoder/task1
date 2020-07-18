import React, { Component } from 'react';
import Routes from './Routes';
import Navbar from './componenets/Navbar'

import './App.css';
import Home from './Home/Home';
class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
      </div>
    );
  };
}

export default App;
