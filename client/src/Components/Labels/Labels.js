import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Labels extends Component {
  state = {
    label: ''
  }
  handleChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  handleClick = async() => {
    this.setState({
      label:''
    })
    await this.props.setLabel(this.state.label)    
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>

          <form >
            <TextField
              id="addLabel"
              label="Add Label:"
              onChange={this.handleChange}
              value={this.state.label}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <Button color="primary" onClick={this.handleClick}>Add Label</Button>
          </form>
        </Card>
      </div>
    );
  }
}


export default Labels;

