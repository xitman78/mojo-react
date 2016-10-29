import React, { Component } from 'react';
import { Link} from 'react-router';
import '../Common.css';

export default class About extends Component {

  constructor() {
      super();
      this.state = { value: ''};
  }

  navigate() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
          <h1>About</h1>
          <Link className="menu-link" to="/about">Company</Link>
          <Link className="menu-link" to="/about/contacts">Contacts</Link>
          <hr />
          <button onClick={this.navigate.bind(this)}>Show props</button>
          <hr />
          {this.props.children}
      </div>
    );
  }
}
