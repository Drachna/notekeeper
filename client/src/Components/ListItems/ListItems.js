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
    await this.setState({
      done: !this.state.done
    })
    console.log(this.state);
  }
  render() {
    console.log(this.props,'from list');
    return (
      <div>
        
        <li className="lists">
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox onClick={this.toggleStatus} />
          </InputGroup.Prepend>
          <FormControl aria-label="Text input with checkbox" value={this.state.item} />
          <MdDelete style={{width:'20px',height:'35px'}}></MdDelete>
        </InputGroup>
        </li>
      </div>
    );
  }
}

export default ListItems;