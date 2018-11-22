import React from 'react';
import LocalizedStrings from 'react-localization';
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';

const strings = new LocalizedStrings({
  en: {
    newTask: 'New task',
    assignPeople: 'Assign people',
    add: 'Add'
  }
});

class Task extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{flex: 2}}>
          <input placeholder={strings.newTask}
            style={{
              width: '90%', height: '20px', border: 'none',
              borderBottom: '2px solid #d0d0d0'
            }}
            value={task.text}
          />
        </div>
        <div style={{flex: 1}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{marginRight: '5px'}}>
              <input placeholder={strings.assignPeople}
                style={{
                  height: '20px', border: 'none',
                  borderBottom: '2px solid #d0d0d0'
                }}
              />
            </div>
            <div>
              {
                task.id ?
                  <input type="radio" name="done" value={task.done} />:
                  <button>
                    <span class="glyphicon glyphicon-plus"
                      style={{color: COLOR4, font: 'bold'}}
                    >
                      +
                    </span>
                  </button>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Task;
