import React from 'react';
import './App.scss';

import { TaskInput } from './../TaskInput/TaskInput';
import { TaskList } from './../TaskList/TaskList';
import { TaskErase } from './../TaskErase/TaskErase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      key: 4,
      tasks: [
        { key: 0, name: "커미션 마감하기", checked: false },
        { key: 1, name: "자바스크립트 공부하기", checked: true },
        { key: 2, name: "재활용 쓰레기 분리수거하기", checked: false },
        { key: 3, name: "부모님 심부름 다녀오기", checked: false }
      ] 
    };

    this.inputChange = this.inputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.checkTask = this.checkTask.bind(this);
    this.eraseCheckedTask = this.eraseCheckedTask.bind(this);
  }

  inputChange(value) {
    this.setState( { input: value } );
  }

  addTask() {
    if(this.state.input !== "") {
      let newKey = this.state.key;
      let newTaskList = this.state.tasks;
      
      newTaskList.push( { key: newKey, name: this.state.input, checked: false } );
      this.setState( { key: newKey + 1, input: "", tasks: newTaskList } );
    }
  }

  checkTask(key) {
    let newTaskList = this.state.tasks;
    
    const checkedTaskIndex = this.state.tasks.findIndex( task => task.key === key );
    const checkedTask = this.state.tasks[checkedTaskIndex];

    let newTaskChecked = true;
    if(checkedTask.checked === true) { newTaskChecked = false; }

    newTaskList[checkedTaskIndex] = { key: checkedTask.key, name: checkedTask.name, checked: newTaskChecked };

    this.setState( { tasks: newTaskList } );
  }

  eraseCheckedTask() {
    let newTaskList = this.state.tasks.filter( task => task.checked === false );

    this.setState( { tasks: newTaskList } );
  }

  render() {
    return (
      <div className="app">
        <TaskInput input={this.state.input} onChange={this.inputChange} onClick={this.addTask} />
        <TaskList tasks={this.state.tasks} onCheck={this.checkTask} />
        <TaskErase onClick={this.eraseCheckedTask} />
      </div>
    );
  }
}