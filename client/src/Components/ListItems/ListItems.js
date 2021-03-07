import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import './itemstyles.css'
class ListItems extends Component {
  state = {
    done: this.props.itemData.done,
    item: this.props.itemData.todo
  }
  toggleStatus = async (e) => {
    this.props.toggleStatus(this.props.itemData.index)
    // console.log(this.state);
  }
  deleteTodo=async()=>{
    this.props.deleteTodo(this.props.itemData.index)
  }
  render() {
    
    return (
      <div>
        
        <li className="lists" key={this.props.itemData.index}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox onClick={this.toggleStatus} />
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with checkbox" value={this.props.itemData.todo} />
          <MdDelete style={{width:'20px',height:'35px'}} onClick={this.deleteTodo}></MdDelete>
        </InputGroup>
        </li>
      </div>
    );
  }
}

export default ListItems;