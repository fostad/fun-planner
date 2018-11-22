import React from 'react';
import LocalizedStrings from 'react-localization';
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';
import Task from './task';

const strings = new LocalizedStrings({
  en: {
    tasks: 'Tasks'
  }
});

const tasks = [
  {id:undefined, text:'', done: false},
  {id: 1, text: 'Buy dinner', done: false, userId: 1},
  {id: 2, text: 'Bring games', done: false, userId: 1},
  {id: 3, text: 'Buy snack', done: false, userId: 1}
];

const Tasks = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}} >
      <div style={{border: '2px solid #d0d0d0', padding: '2px'}}>
        <div class="panel panel-default">
          <div
            style={{
              borderBottom: '2px solid #d0d0d0', backgroundColor: COLOR3,
              fontWeight: 'bold'
            }}
          >
            <span style={{color: COLOR5}}>{strings.tasks}</span>
          </div>
          {
            tasks ? tasks.sort((a, b) => {
              return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
            }).map(task => {
              return (
                <div><Task task={task} /></div>
              );
            }) : null
          }
        </div>
      </div>
    </div>
  );
};

export default Tasks;
