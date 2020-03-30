import React from 'react';
import './TaskInput.scss';

import { ReactComponent as IconPlus } from './icon_plus.svg';

export class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  
  handleClick(e) {
    e.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <form>
        <input id="taskName" name="task_name" type="text" value={this.props.input} onChange={this.handleChange} placeholder="무슨 일을 계획하고 계신가요?" />
        <button type="submit" onClick={this.handleClick}>
          <IconPlus />
        </button>
      </form>
    );
  }
}