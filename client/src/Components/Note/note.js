import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import { MdAddCircle } from "react-icons/md";
import Popover from '@material-ui/core/Popover';
import Colors from '../Colors/Colors'
import Reminder from '../Reminder/Reminder'
import Labels from '../Labels/Labels';
import './note.css'
import { addNote, saveEditedNote } from '../../Store/actions/handleNoteActions';
import { connect } from 'react-redux'
import ListItems from '../ListItems/ListItems';
import { toolBarList } from './ToolBarList'
import Moment from 'react-moment';
import { Snackbar } from '@material-ui/core';

class Note extends Component {

  constructor(props) {
    super(props);
    this.intialState = {
      title: '',
      content: '',
      archive: false,
      pinned: false,
      listItems: [],
      labels: [],
      color: 'white',
      reminders: [],
      anchorEl: null,
      show: false,
      showNotification: false,
      message: ''

    }


    if (this.props.noteToBeEdited !== null) {
      this.state = props.noteToBeEdited

    }
    else {
      this.state = this.intialState
    }

  }

  toggleArchive = () => {
    this.setState({
      archive: !this.state.archive,
      showNotification: true,
      message: this.state.archive ? 'Action Undone' : 'Note archieved'
    })

  }

  togglePin = () => {
    this.setState({
      pinned: !this.state.pinned,
      showNotification: true,
      message: this.state.pinned ? 'Action Undone' : 'Note Pinned'
    })
  }

  handleChange = async (e) => {
    await this.setState({
      [e.target.id]: e.target.value
    })
  }

  showPopOver = (e) => {
    this.setState({
      anchorEl: e.currentTarget,
      show: e.currentTarget.id
    })
  }

  closePopOver = () => {
    this.setState({
      anchorEl: null
    })
  }

  resetState = () => {
    this.setState(() => this.intialState)
  }
  setReminder = (data) => {
    let reminders = [...this.state.reminders, data]
    this.setState({
      reminders
    })
  }

  setLabel = (data) => {
    let labels = [...this.state.labels, data]
    this.setState({
      labels
    })
  }

  setColor = (data) => {
    this.setState({
      color: data
    })
  }

  addToList = () => {
    const data = {
      done: false,
      todo: this.state.content
    }

    let listItems = [...this.state.listItems, data]
    this.setState({
      content: '',
      listItems
    })
  }

  toggleStatus = (id) => {
    let listItems = this.state.listItems.filter((item, index) => {
      if (index === id) {
        item.done = !item.done
        return item
      }
      else {
        return item
      }
    })
    this.setState({
      listItems
    })

  }

  deleteTodo = (id) => {
    let listItems = this.state.listItems.filter((item, index) => {
      return index !== id
    })
    this.setState({
      listItems
    })
  }

  renderPopOver = () => {
    if (this.state.show === 'reminder')
      return <Reminder setReminder={this.setReminder} />

    else if (this.state.show === 'color')
      return <Colors setColor={this.setColor} />

    else if (this.state.show === 'label')
      return <Labels setLabel={this.setLabel} />
  }
  handleClose = () => {
    this.setState({
      showNotification: false
    })
  }
  handleClick = async () => {

    if (this.props.editNote) {
      await this.props.saveEditedNote(this.state)
    }
    else {
      var formData = new FormData();
      formData.append('title', this.state.title)
      formData.append('content', this.state.content)
      formData.append('archive', this.state.archive)
      formData.append('pinned', this.state.pinned)
      formData.append('color', this.state.color)
      formData.append('reminders', JSON.stringify(this.state.reminders))
      formData.append('labels', JSON.stringify(this.state.labels))
      formData.append('listItems', JSON.stringify(this.state.listItems))

      await this.props.addNote(formData)

      this.setState(() => this.intialState)
    }
  }

  render() {

    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
      <div className="noteBox">
        <Card style={{ width: "30rem", background: this.state.color }}>
          <Card.Title>
            <input className="title"
              style={{ background: this.state.color }}
              type="text"
              value={this.state.title}
              id="title"
              autoComplete="off"
              placeholder="Title"
              onChange={this.handleChange} />

          </Card.Title>

          <Card.Text >
            <input
              type="text"
              style={{ background: this.state.color }}
              className="title"
              autoComplete="off"
              placeholder="Content"
              id="content"
              value={this.state.content}
              onChange={this.handleChange}></input>
          </Card.Text>
          <Card.Body >
            <div>
              {this.state.listItems.map((item, index) => {
                const data = {
                  todo: item.todo,
                  done: item.done,
                  index: index
                }
                return <ListItems key={index} toggleStatus={this.toggleStatus} deleteTodo={this.deleteTodo} itemData={data} />
              })}

            </div>
            <div >
              {this.state.labels.map((label) => {
                return < div className='arrDisplay'>{label}</div>
              })}
              {this.state.reminders.map((reminders) => {
                return < div className='arrDisplay'>
                  <Moment date={reminders}></Moment>
                </div>
              })}
            </div>

            <div className="toolbar">
              {toolBarList.map((tool, index) => {
                return <OverlayTrigger
                  key={index}
                  overlay={
                    <Tooltip id={tool.id}>
                      {tool.text}
                    </Tooltip>
                  }>

                  {React.cloneElement(tool.component[0], { onClick: this[`${tool.fName}`] })}
                </OverlayTrigger>
              })}

              <MdAddCircle className="addNote" onClick={this.handleClick} />

              <Popover
                id={id}
                open={open}
                anchorEl={this.state.anchorEl}
                onClose={this.closePopOver}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {this.renderPopOver()}
              </Popover>


              <Snackbar
                open={this.state.showNotification}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                onClose={this.handleClose}
                autoHideDuration={3000}
                message={this.state.message}>
              </Snackbar>

            </div>

          </Card.Body >
        </Card>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noteToBeEdited: state.note.noteToBeEdited,
    editNote: state.note.editNote

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (data) => dispatch(addNote(data)),
    saveEditedNote: (data) => dispatch(saveEditedNote(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Note);