import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap'
import { MdAlarm, MdImage, MdArchive, MdLabelOutline, MdDelete, MdList, MdAddCircle } from "react-icons/md";
import { BiUndo, BiRedo } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import Popover from '@material-ui/core/Popover';
import { RiPushpin2Line } from "react-icons/ri";
import Colors from '../Colors/Colors'
import Reminder from '../Reminder/Reminder'
import Labels from '../Labels/Labels';
import './note.css'
import { addNote, saveEditedNote } from '../../Store/actions/handleNoteActions';
import { connect } from 'react-redux'
import ListItems from '../ListItems/ListItems';
class Note extends Component {

  constructor(props) {
    super(props);
    this.intialState = {
      title: '',
      content: '',
      imageToAdd: '',
      archive: '',
      pinned: '',
      listItems: [],
      anchorEl: null,
      show: false
    }

    console.log(this.props);
    if (this.props.noteToBeEdited !== null) {
      this.state = props.noteToBeEdited
      console.log('in if');
    }
    else {
      this.state = this.intialState
      console.log('in else', this.state);
    }

  }

  // this.initialState = {
  //   title: this.props.title,
  //   content: this.props.content,
  //   imageToAdd: this.props.imageToAdd,
  //   archive: this.props.archive,
  //   pinned: this.props.pinned,
  //   // reminder:this.props.reminder,
  //   // labels:this.props.labels,
  //   listItems: this.props.listItems,
  //   anchorEl: null,
  //   show: false
  // }
  // state = this.initialState
  toggleArchive = () => {
    this.setState({
      archive: !this.state.archive
    })
  }

  togglePin = () => {
    this.setState({
      pinned: !this.state.pinned
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
  setimage = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0]
    })
  }
  closePopOver = () => {
    this.setState({
      anchorEl: null
    })
  }

  setReminder = (data) => {
    this.setState({
      reminder: data
    })
  }

  setLabel = (data) => {
    this.setState({
      labels: data
    })
  }

  setColor = (data) => {
    this.setState({
      color: data
    })
  }

  addToList = (todo) => {
    const data = {
      done: false,
      todo: todo
    }
    let listItems = [...this.state.listItems, data]
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

  handleClick = async () => {

    if (this.props.editNote) {

      await this.props.saveEditedNote(this.state)
    }
    else {
      var formData = new FormData();
      const data = {
        title: this.state.title,
        content: this.state.content,
        imageToAdd: this.state.imageToAdd,
        archive: this.state.archive,
        pinned: this.state.pinned,
        listItems: this.state.listItems,
      }
      console.log(this.props, 'from notes');
      formData.append('title', data.title)
      formData.append('content', data.content)
      formData.append('imageToAdd', data.imageToAdd)
      formData.append('archive', data.archive)
      formData.append('pinned', data.pinned)
      formData.append('reminder', this.props.reminder)
      formData.append('labels', this.props.labels)

      console.log(this.props);

      await this.props.addNote(formData)

      this.setState(() => this.initialState)
    }
  }

  render() {
    console.log(this.state, 'state');
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
      <div className="noteBox">

        <Card style={{ width: "30rem" }}>

          <Card.Title>
            <input className="title" type="text" value={this.state.title} id="title" autoComplete="off" placeholder="Title" onChange={this.handleChange}></input>

            <OverlayTrigger
              overlay={
                <Tooltip id="pin">
                  Pin note
                </Tooltip>
              }>
              <RiPushpin2Line id="pin" style={this.state.pinned ? { background: 'black' } : { background: 'white' }} onClick={this.togglePin} />
            </OverlayTrigger>
          </Card.Title>

          <Card.Text >
            <input type="text" className="title" autoComplete="off" placeholder="Content" id="content" value={this.state.content} onChange={this.handleChange}></input>
          </Card.Text>
          <Card.Body >
            <div>
              {/* <ul className="lists"> */}
             { this.state.listItems.map((item,index)=>{
                return <ListItems key={index} toggleStatus={this.toggleStatus} deleteTodo={this.deleteTodo} itemData={item}/>
              })}
              {/* </ul> */}
              </div>
            <div >

              <div style={{
                display: 'inline-block',
                marginRight: '8px',
                borderRadius: '25px',
                padding: '4px',
                background: '#dee2e6'
              }}>{this.state.labels}</div>
              <div style={{
                display: 'inline-block',
                marginRight: '8px',
                borderRadius: '25px',
                padding: '4px',
                background: '#dee2e6'
              }}>{this.state.reminder}</div>

               
            </div>

            <div className="toolbar">

              <OverlayTrigger
                overlay={
                  <Tooltip id="reminder">
                    Remind Me
                  </Tooltip>
                }>
                <MdAlarm id="reminder" onClick={this.showPopOver} className="icon" />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="color">
                    Change Color
                  </Tooltip>
                }>
                <IoIosColorPalette id="color" className="icon" onClick={this.showPopOver} />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="image">
                    Add image
                  </Tooltip>
                }>
                <div className="imageset">

                  <input id="file-input" name="imageToAdd" className="image-upload" onChange={this.setimage} type="file" />
                  <label htmlFor="file-input">
                    <MdImage id="image" className="icon" />
                  </label>
                </div>
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="archive">
                    Archive
                  </Tooltip>
                }>
                <MdArchive id="archive" className="icon" onClick={this.toggleArchive} />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="label">
                    Add label
                  </Tooltip>
                }>
                <MdLabelOutline id="label" className="icon" onClick={this.showPopOver} />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="delete">
                    Delete
                  </Tooltip>
                }>
                <MdDelete id="delete" className="icon" onClick={this.showPopOver} />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="undo">
                    Undo
                  </Tooltip>
                }>
                <BiUndo id="undo" className="icon" onClick={this.showPopOver} />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="redo">
                    Redo
                  </Tooltip>
                }>
                <BiRedo id="redo" className="icon" onClick={this.showPopOver} />
              </OverlayTrigger>

              <OverlayTrigger
                overlay={
                  <Tooltip id="list">
                    Add to list
                  </Tooltip>
                }>
                <MdList id="list" className="icon" onClick={()=>{this.addToList(this.state.content)}} />
              </OverlayTrigger>

              <MdAddCircle className="addNote justify-end" onClick={this.handleClick}/>

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

            </div>

          </Card.Body >
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // title: state.note.title,
    // content: state.note.content,
    reminder: state.note.reminder,
    labels: state.note.labels,
    // imageToAdd: state.note.imageToAdd,
    // pinned: state.note.pinned,
    // archive: state.note.archive,
    // listItems: state.note.listItems,
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