import React from 'react';
import Form from '../components/Forms';
import List from '../components/List';
import Timer from '../components/timer';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
     <Form />
     <List />
     <Timer />
    </div>
  );
}

export default App;
