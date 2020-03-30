import React from 'react';
import './TaskList.scss';

import { Task } from './../Task/Task';

export class TaskList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map( task => <Task key={task.key} id={task.key} name={task.name} checked={task.checked} onCheck={this.props.onCheck} /> )}
      </ul>
    );
  }
}