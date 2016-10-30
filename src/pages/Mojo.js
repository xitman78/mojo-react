import React, { Component } from 'react';
import { Button, FormGroup, InputGroup, FormControl, Grid, Row, Col } from 'react-bootstrap';
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

  submitForm = (event) => {
    console.log('submitForm', this.state);
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <h1>Mojo</h1>
        <Grid>
        <Row className="show-grid">
          <Col xs={10} md={10}>
          <form>
            <FormGroup>
             <InputGroup  bsSize='sm'>
               <FormControl value={this.state.value} onChange={this.handleChange} required type="text" />
               <InputGroup.Button>
                 <Button type="submit" disabled={this.state.value.trim().length === 0} bsStyle="success" onClick={this.submitForm}>Send</Button>
               </InputGroup.Button>
              </InputGroup>
            </FormGroup>
            </form>
           </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Mojo;
