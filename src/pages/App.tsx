import React, { useState } from 'react';
import { ITask } from '../types/tasks';
import Form from '../components/Forms';
import List from '../components/List';
import Timer from '../components/timer';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(previousTasks => previousTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks} />
     <List 
      tasks={tasks}
      selectTask={selectTask}
    />
     <Timer selected={selected} />
    </div>
  );
}

export default App;
