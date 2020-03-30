import React from 'react';
import './Task.scss';

export class Task extends React.Component {
  constructor(props) {
    super(props);

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.props.onCheck(this.props.id);
  }
  
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.props.checked} />
          <div className="checkbox" />
          <span>{this.props.name}</span>
        </label>
      </li>
    );
  }
}