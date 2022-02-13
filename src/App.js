import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from "./NavigationBar.js"
import Content from "./Content.js"

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Content />

   
      </>
    );
  }
}

export default App;
