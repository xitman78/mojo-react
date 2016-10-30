import React, { Component } from 'react'
import { Link } from 'react-router'
import logo from './logo.svg'
import menu from './components/navbar'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
       {menu}
        { /* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reactive World</h2>
          <div className="App-intro">
            <span>This is Cool Single-Page React App with React-Router</span>
          </div>
        </div>
        <div className="menu-bar">
          <Link className="menu-link" to="/">Home</Link>
          <Link className="menu-link" to="about">About</Link>
          <Link className="menu-link" to="mojo">Mojo</Link>
        </div> */ }
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
