import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap'
import { MdDelete } from "react-icons/md";
import './itemstyles.css'
class ListItems extends Component {

  toggleStatus = async (e) => {
    if (this.props.toggleStatus) {
      this.props.toggleStatus(this.props.itemData.index)    
    }
  }
  deleteTodo = async () => {
    if (this.props.deleteTodo){
    this.props.deleteTodo(this.props.itemData.index)
    }
  }
  render() {

    return (
      <div>

        <li className="listStyle" key={this.props.itemData.index}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Checkbox
                onClick={this.toggleStatus} />
            </InputGroup.Prepend>
            <FormControl
              
              style={{ textDecoration: this.props.itemData.done ? 'line-through' : 'none' }}
              defaultValue={this.props.itemData.todo} />
            <MdDelete
              style={{ width: '20px', height: '35px' }}
              onClick={this.deleteTodo}></MdDelete>
          </InputGroup>
        </li>
      </div>
    );
  }
}

export default ListItems;