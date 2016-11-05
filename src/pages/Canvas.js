import React, { Component } from 'react'
import './Canvas.css'


class MyCanvas extends Component {

  constructor() {
      super();
      this.state = { value: ''};
      this.ctx = null;
  }

  moveHandler(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left
    let y =  e.clientY - bounds.top
    this.ctx.fillRect(x-4, y-4, 8, 8)
  }


  componentDidMount() {
    let canvas = document.getElementById('my-canvas')
    this.ctx = canvas.getContext('2d')
    this.ctx.fillStyle = "green"
  }

  render() {
    return (
      <div>
        <h1>Canvas</h1>
        <hr />
        <canvas id="my-canvas" width="500" height="500" onMouseMove={this.moveHandler.bind(this)}></canvas>
      </div>
    );
  }
}

export default MyCanvas;
