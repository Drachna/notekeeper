import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux'
import { fetchNotes } from '../../Store/actions/handleNoteActions';


class DisplayNotes extends Component {
  componentDidMount(){
    // this.props.fetchNotes()
  }
  state = {
    notes: [{ a: 'bv' },{ a: 'cv' }]
  }

  renderNotes = () => {
    return this.props.notes.map((note) => {
      return (
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             {note.title}
            </Typography>
            <Typography variant="h5" component="h2">
            {note.content}
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

const mapStateToProps=(state)=>{
  return{
    notes:state.handleNote.notes
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    fetchNotes:()=>dispatch(fetchNotes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayNotes);