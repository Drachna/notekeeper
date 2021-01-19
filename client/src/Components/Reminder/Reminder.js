import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addReminder } from '../../Store/actions/noteActions';
class Reminder extends Component {
  state = {
    reminder: ''
  }
  handleChange = (e) => {

    this.setState({
      reminder: e.target.value
    })

    console.log(this.state);
  }
  handleClick = () => {
    // console.log(this.state);
    this.props.addReminder(this.state)
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <form >
            <TextField
              id="datetime-local"
              label="Choose Date and Time"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"

              onChange={this.handleChange}
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
    reminder: state.note.reminder
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (data) => dispatch(addReminder(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);





