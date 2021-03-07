import React, { Component } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Card } from 'react-bootstrap'
import { MdAlarm, MdImage, MdArchive, MdLabelOutline, MdDelete, MdList, MdAddCircle } from "react-icons/md";
import { BiUndo, BiRedo } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import Popover from '@material-ui/core/Popover';
import { RiPushpin2Line ,RiPushpin2Fill} from "react-icons/ri";
import Colors from '../Colors/Colors'
import Reminder from '../Reminder/Reminder'
import Labels from '../Labels/Labels';
import './toolbar.css'
import { addNote, saveEditedNote } from '../../Store/actions/handleNoteActions';
import { connect } from 'react-redux'
import ListItems from '../ListItems/ListItems';
class Toolbar extends Component {
    state={
        anchorEl:null,
        show:false
    }
    
    toggleArchive=()=>{
        this.props.toggleArchive()
    }
    
    showPopOver = (e) => {
      this.setState({
        anchorEl: e.currentTarget,
        show: e.currentTarget.id
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
    render() {
        console.log(this.state, 'state');
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        return (
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
                <MdList id="list" className="icon" onClick={() => { this.addToList(this.state.content) }} />
              </OverlayTrigger>

              <MdAddCircle className="addNote justify-end" onClick={this.handleClick} />

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
        );
    }
}

export default Toolbar;