import React from 'react';
import { Card } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
function Labels(props) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>

        <form >
          <TextField
            id="addLabel"
            label="Add Label:"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Card>
    </div>
  );
}

export default Labels;