import React from 'react';
import { Card } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
function Reminder(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>


        <form >
          <TextField
            id="datetime-local"
            label="Choose Date and Time"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"

            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Card>
    </div>
  );
}

export default Reminder;