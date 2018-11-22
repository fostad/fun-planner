import React from "react";
import LocalizedStrings from 'react-localization';
import moment from 'moment';
import DatePicker from './date-picker';
import Avatar from './avatar';
import Games from './games';
import Tasks from './tasks';
import { COLOR1, COLOR2, COLOR3, COLOR4, COLOR5 } from '../colors';

const strings = new LocalizedStrings({
  en: {
    title: 'Title'
  }
});

class Event extends React.Component {
  render() {
    const date = moment().format();
    console.log('date', date);
    return (
      <div
        style={{
          padding: '35px', margin: '7.5%',
          backgroundColor: 'white'
        }}
      >
        <div
          style={{
            display: 'flex', flexDirection: 'column', marginLeft: '5px',
            marginRight: '5px', marginBotton: '5px'
          }}
        >
          <div
            style={{
              marginLeft: '5px', display: 'flex', flex: 1,
              justifyContent: 'space-between'
            }}
          >
            <div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
              <div style={{}}>
                <input placeholder={strings.title}
                  style={{
                    width: '90%', height: '20px', border: 'none',
                    borderBottom: '2px solid #d0d0d0'
                  }}
                />
              </div>
              <div style={{flex: 1, width: '90%', marginTop: '5px'}}>
                <DatePicker scheduled={date}/>
              </div>
            </div>
            <div style={{flex: 1}}>
              <div style={{float: 'right'}}>
                <Avatar color={COLOR3} size='80px'/>
              </div>
            </div>
          </div>
          <div style={{marginTop: '5px'}}>
            <Games />
          </div>
          <div style={{marginTop: '5px'}}>
            <Tasks />
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
