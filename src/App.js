import React, { Component } from 'react'
import { Link } from 'react-router'
import logo from './logo.svg'
import menu from './components/navbar'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.setState({canvasWidth: 500, canvasHeight: 500})
  }

  render() {
    return (
      <div className="App">
       {menu}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
