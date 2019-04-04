import React, { Component } from 'react';
import fondo from './images/fondo.jpg';
import logo from './images/shopMak.png';
import iphone from './images/iphone.gif';
import watch from './images/watch.jpg';
import makeup from './images/makeup.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img class="logo" src={logo}/>

        <div className="card">
          <img class="iphone" src={iphone}/>
        </div>

        <div className="card">
        <img class="watch" src={watch}/>
        </div>

        <div className="card">
        <img class="makeup" src={makeup}/>
        </div>

      </div>


    );
  }
}

export default App;
