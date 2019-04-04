import React, { Component } from 'react';
import fondo from './images/fondo.jpg';
import logo from './images/shopMak.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <img class="logo" src={logo}/>
      </div>


    );
  }
}

export default App;
