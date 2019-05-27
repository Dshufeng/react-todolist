import React from 'react';
import TodoItem from './TodoItem';

import './style.css';

class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        'learn englist',
        'learn chinese',
        'learn react'
      ],
      inputValue: ""
    };
    this.hanleInputChange = this.hanleInputChange.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);

  }
  handleClickButton() {
    if (this.state.inputValue === '') {
      return false;
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }
  hanleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  // handleDelItem(index) {
  //   let list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({ list });
  // }

  handleDeleteItem(index) {
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list });
  }

  getItem() {
    return (
      this.state.list.map((item, index) => {
        return < TodoItem
          del={this.handleDeleteItem}
          key={index}
          content={item}
          index={index}
        />
      })
    );
  }
  render() {
    return (
      <div className="Todolist">
        <div>
          <input type="text" onChange={this.hanleInputChange} value={this.state.inputValue} />
          <button className="red-btn" onClick={this.handleClickButton}>add</button>
        </div>
        <ul>
          {this.getItem()}
        </ul>
      </div >
    );
  }
}

export default Todolist;
