import React from 'react';
import './TaskErase.scss';

export class TaskErase extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }
  
  render() {
    return (
      <div className="button_wrapper">
        <button onClick={this.handleClick}>완료한 일 모두 삭제</button>
      </div>
    );
  }
}