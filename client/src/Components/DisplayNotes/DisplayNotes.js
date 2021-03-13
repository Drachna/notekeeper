import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { deleteNote, fetchNotes } from '../../Store/actions/handleNoteActions';
import { Modal } from 'react-bootstrap'
import './cardStyle.css'
import Note from '../Note/note';
import { editNote, resetData } from '../../Store/actions/noteActions';
import ListItems from '../ListItems/ListItems';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'react-moment';



class DisplayNotes extends Component {
  async componentDidMount() {
    await this.props.fetchNotes()
  
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

  deleteNotes = (note) => {
    this.props.deleteNote(note._id)
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
    this.props.resetData()

  }

  renderNotes = () => {
    return this.props.notes.map((note) => {
      return (
        <div key={note._id}>
          <Card variant="outlined" m={2} style={{
            background: note.color,
            width: '50vw',
            transitionDuration: '0.3s',
            margin: 'auto',
            marginTop: '10px'
          }}>
            <CardContent>
              <Typography style={{ textAlign: 'left' }} variant="h6" component="h2">
                {note.title}
              </Typography>
              <Typography style={{ textAlign: 'left' }} component="p">
                {note.content}
              </Typography>
              <div>

                {note.listItems.map((item, index) => {
                  return <ListItems key={index} toggleStatus={this.toggleStatus} deleteTodo={this.deleteTodo} itemData={item} />
                })}

              </div>
              <Typography style={{ textAlign: 'left' }} component="div">

                {note.labels.map((label, index) => {
                  return <div key={index} style={{
                    display: 'inline-block',
                    marginRight: '8px',
                    borderRadius: '25px',
                    padding: '4px',
                    background: '#dee2e6'
                  }}>{label}</div>
                })}
                {note.reminders.map((reminder, index) => {
                  return <div
                    key={index}
                    style={{
                      display: 'inline-block',
                      marginRight: '8px',
                      borderRadius: '25px',
                      padding: '4px',
                      background: '#dee2e6'
                    }}>
                    <Moment date={reminder}></Moment>
                  </div>
                })}
              </Typography>
            </CardContent>
            <CardActions >

              <Button size="small" onClick={() => { this.handleEdit(note) }}>Edit</Button>
              <Button size="small" onClick={() => { this.deleteNotes(note) }}>Delete</Button>
            </CardActions>


          </Card>
        </div>
      )
    })

  }
  render() {
    return (
      <div className="grid">
       
        {this.props.notes ? this.renderNotes() : <CircularProgress />}
        <Modal
          show={this.state.showModal}
          onHide={this.handleClose}
          style={{ marginTop: '10%' }}>
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
    notes: state.handleNote.notes,
    status: state.auth.status
  }
}

const mapDispatchToProps = (dispatch, data) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    editNote: (data) => dispatch(editNote(data)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    resetData: () => dispatch(resetData())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DisplayNotes));