import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Propsotest extends Component {

  clickHandler() {
    console.log('clickHandler', this.props)
    console.log('State', this.state);
  }

  render() {
    return (
      <div>
        <Button  bsSize="small" bsStyle="danger" onClick={this.clickHandler.bind(this)}>Click Me</Button>
      </div>
    );
  }

}
