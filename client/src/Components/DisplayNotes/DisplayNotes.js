import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { fetchNotes } from '../../Store/actions/handleNoteActions';
import { Modal } from 'react-bootstrap'
import './cardStyle.css'
import Note from '../Note/note';
import { editNote, resetData } from '../../Store/actions/noteActions';


const cardStyle = {
  display: 'block',
  width: '60vw',
  transitionDuration: '0.3s',
  margin: 'auto',
  marginTop: '10px',

}
class DisplayNotes extends Component {
  componentDidMount() {
    this.props.fetchNotes()
  }
  state = {
    notes: [],
    noteToEdit: '',
    showModal: false
  }

  handleEdit = (note) => {
    this.setState({
      showModal: true,
      noteToEdit: note
    })
    this.props.editNote(note)
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
    this.props.resetData()

  }

  renderNotes = () => {
    // console.log(this.props.notes.reminder);
    return this.props.notes.map((note) => {
      return (
        <div key={note._id}>
          <Card variant="outlined" m={2} style={cardStyle}>
            <CardContent>
              <Typography style={{ textAlign: 'left' }} variant="h6" component="h2">
                {note.title}
              </Typography>
              <Typography style={{ textAlign: 'left' }} component="p">
                {note.content}
              </Typography>
              <Typography style={{ textAlign: 'left' }} component="p">
                {note.labels.map(label => {
                  return <div style={{
                    display: 'inline-block',
                    marginRight: '8px',
                    borderRadius: '25px',
                    padding: '4px',
                    background: '#dee2e6'
                  }}>{label}</div>
                })}
                {note.reminder.map(reminder => {
                  return <div style={{
                    display: 'inline-block',
                    marginRight: '8px',
                    borderRadius: '25px',
                    padding: '4px',
                    background: '#dee2e6'
                  }}>{reminder}</div>
                })}
              </Typography>
            </CardContent>
            <CardActions >

              <Button size="small" onClick={() => { this.handleEdit(note) }}>Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>


          </Card>
        </div>
      )
    })

  }
  render() {
    return (
      <div className="grid">
        {this.renderNotes()}

        <Modal show={this.state.showModal} onHide={this.handleClose} style={{ marginTop: '10%' }}>
          <Modal.Header style={{ background: 'black' }}>
            <Modal.Title style={{ color: 'white' }}>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Note />

          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.note.title,
    notes: state.handleNote.notes
  }
}

const mapDispatchToProps = (dispatch, data) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    editNote: (data) => dispatch(editNote(data)),
    resetData: () => dispatch(resetData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNotes);