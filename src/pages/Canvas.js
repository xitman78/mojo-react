import React, { Component } from 'react'
import './Canvas.css'


class MyCanvas extends Component {

  constructor(props) {
      super(props);
      console.log('Constructor', props);
      this.state = { value: ''};
      this.ctx = null;

  }

  moveHandler(e) {
    let bounds = e.target.getBoundingClientRect();
    let x = e.clientX - bounds.left
    let y =  e.clientY - bounds.top
    this.ctx.beginPath()
    this.ctx.arc(x, y, this.state.width, 0, Math.PI*2)
    this.ctx.fillStyle = this.state.color
    this.ctx.fill()
    //this.ctx.fillRect(x-this.state.width/2, y-this.state.width/2, this.state.width, this.state.width)
  }


  componentDidMount() {
    let canvas = document.getElementById('my-canvas')
    this.ctx = canvas.getContext('2d')
    this.setState( {color: 'green', width: 4} )
  }

  setColor(color) {
    this.setState({ color })
  }

  setBrush(brush) {
    this.setState({ width: brush })
  }

  getActiveBrush(brush) {
    return this.state.width === brush ? {'borderWidth': '3px'} : {}
  }

  getActiveStyle(color) {
    return this.state.color === color ? {'borderWidth': '3px', 'backgroundColor': color} : { 'backgroundColor': color }
  }

  showProps() {
    console.log(this.state);
  }

  render() {
    const colors = ['red', 'green', 'blue', 'yellow', 'magenta', '#AA4499', '#33BBCC']
    const brushes = [ 2, 4, 6, 8, 12, 16, 24]
    return (
      <div>
        <h1>Canvas</h1>
        <hr />
        <canvas id="my-canvas" width={this.props.route.canvasWidth} height={this.props.route.canvasHeight} onMouseMove={this.moveHandler.bind(this)}></canvas>
        <hr />
        {colors.map(color => <span onClick={this.setColor.bind(this, color)} key={color} className="color-selector" style={this.getActiveStyle(color)}></span>)}
        <br />
        {brushes.map(brush => <span onClick={this.setBrush.bind(this, brush)} key={brush} className="brush-selector" style={this.getActiveBrush(brush)}>{brush}</span>)}
        <br />
        <button onClick={this.showProps.bind(this)}>Props</button>
      </div>
    );
  }
}

export default MyCanvas;
