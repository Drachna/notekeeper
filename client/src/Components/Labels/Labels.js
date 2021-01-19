import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { addLabel } from '../../Store/actions/noteActions';
class Labels extends Component {
  state = {
    label: ''
  }
  handleChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  handleClick = () => {
    console.log(this.state);
    this.props.addLabel(this.state)
    this.setState({
      label: ''
    })
    console.log(this.props);
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

            <Button color="primary" onClick={this.handleClick}>Add Reminder</Button>
          </form>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    label: state.note.label
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addLabel: (data) => dispatch(addLabel(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Labels);

