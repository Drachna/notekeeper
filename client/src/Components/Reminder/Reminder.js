import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux'
import { addReminder } from '../../Store/actions/noteActions';
class Reminder extends Component {
  state = {
    reminder: new Date
  }
  handleChange = (e) => {
console.log(e.target.value);
     this.setState({
      reminder: e.target.value
    })

    console.log(this.state);
  }
  handleClick = async() => {
    await this.props.setReminder(this.state.reminder) 
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
              value={this.state.reminder}
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
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    // addReminder: (ownProps) => dispatch(addReminder(ownProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);





