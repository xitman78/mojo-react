import React, { Component } from 'react';
import './Mojo.css';

class Mojo extends Component {

  constructor() {
      super();
      this.name = "Hello"
      this.state = { value: ''};
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Mojo</h1>
        <div className="Mojo">
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} required />
            <button type="button" disabled={this.state.value.trim().length === 0}>Send</button>
        </div>
      </div>
    );
  }
}

export default Mojo;
