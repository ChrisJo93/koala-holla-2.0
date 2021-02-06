import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import MainPageComponent from './Components/MainPageComponent';
import FooterComponent from './Components/FooterComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <MainPageComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
