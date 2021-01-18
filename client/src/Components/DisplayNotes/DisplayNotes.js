import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class DisplayNotes extends Component {
  state = {
    notes: [{ a: 'bv' },{ a: 'cv' }]
  }

  renderNotes = () => {
    return this.state.notes.map((note) => {
      // console.log('in render',note);
      return (
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             {note.a}
            </Typography>
            <Typography variant="h5" component="h2">
              fghdf
            </Typography>
            <Typography color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
          <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )
    })

  }
  render() {
    return (
      <div className="grid">
        {this.renderNotes()}

      </div>
    );
  }
}

export default DisplayNotes;