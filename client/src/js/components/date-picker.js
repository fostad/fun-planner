import React from 'react';
import ReactDatePicker from 'react-datepicker';
import LocalizedStrings from 'react-localization';
import moment from 'moment';

import "react-datepicker/dist/react-datepicker.css";
// require('react-datepicker/dist/react-datepicker.css');

const strings = new LocalizedStrings({
  en: {
    todoay: 'Today',
    selectDate: 'Select a day'
  }
});


class DatePicker extends React.Component {
  render() {
    const { disabled, scheduled, onChange } = this.props;
    return (
      <ReactDatePicker
        disabled={disabled} startDate={moment()} selected={scheduled}
        onChange={onChange} todayButton={strings.today}
        placeholder={strings.selectDate}
        style={{height: '10px', border: 'none', borderBottom: '2px solid #d0d0d0'}}
      />
    );
  }
}

export default DatePicker;
