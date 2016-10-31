import React, { Component } from 'react'
import carousel from '../components/carousel'
// import './Mojo.css';

export default class Home extends Component {

  constructor() {
      super();
      this.state = { value: ''};
  }

  render() {
    const a = [1,2,3,4,5];
    return (
      <div>
          <h1>Home</h1>
          <hr />
          {carousel}
          <hr />
          <ul style={{listStyleType: 'none'}}>
          { a.map(i => <li key={i}>{'Item ' + i}</li> ) }
          </ul>
      </div>
    );
  }
}
