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
import { addNote } from '../../Store/actions/noteActions';
import { connect } from 'react-redux'
class Note extends Component {
  state = {
    title: '',
    content: '',
    image: null,
    archive: false,
    pinned: false,
    listItems: [],
    anchorEl: null,
    show: null
  }

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

  handleChange = (e) => {
    this.setState({
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

  renderPopOver = () => {
    if (this.state.show === 'reminder')
      return <Reminder />

    else if (this.state.show === 'color')
      return <Colors />

    else if (this.state.show === 'label')
      return <Labels />
  }

  handleClick = () => {
    const data = {
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
      archive: this.state.archive,
      pinned: this.state.pinned,
      listItems: this.state.listItems,
    }
// console.log(this.state,data);
    this.props.addNote(data)
  }

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
      <div className="noteBox">

        <Card style={{ width: "30rem" }}>

          <Card.Title>
            <input className="title" type="text" id="title" placeholder="Title" onChange={this.handleChange}></input>

            <OverlayTrigger
              overlay={
                <Tooltip id="pin">
                  Pin note
                </Tooltip>
              }>
              <RiPushpin2Line id="pin" />
            </OverlayTrigger>
          </Card.Title>

          <Card.Text >
            <input type="text" placeholder="Content" id="content" onChange={this.handleChange}></input>
          </Card.Text>
          <Card.Body >

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
                  {/* <div className="image-upload">
                  <label htmlFor="file-input"> */}
                <MdImage id="image" className="icon"  />
                {/* </label>
                <input id="file-input" onChange={this.handleChange} type="file" />
                </div> */}
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
                <MdList id="list" className="icon" />
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
    title: state.title
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (data) => dispatch(addNote(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Note);