import React, { useState } from 'react';
import { ITask } from '../types/tasks';
import Form from '../components/Forms';
import List from '../components/List';
import Timer from '../components/timer';
import style from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={style.AppStyle}>
     <Form setTasks={setTasks} />
     <List tasks={tasks} />
     <Timer />
    </div>
  );
}

export default App;
