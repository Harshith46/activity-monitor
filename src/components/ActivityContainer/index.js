import React, {useState} from 'react';
import {Calendar} from 'react-calendar';

import {getCurrentDate, generateMonthWithDate} from '../../utils';
import NameGenerator from '../NameGenerator';

import './activity-container.styles.scss';

const ActivityContainer = ({activityPeriod, name}) => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(generateMonthWithDate(date));
  const [isCalender, setIsCalender] = useState(false);

  const currentStatus = activityPeriod.find(item =>
    item.start_time.includes(selectedDate)
  );

  const onChange = e => {
    setDate(e);
    setSelectedDate(generateMonthWithDate(e));
    setIsCalender(false);
  };

  return (
    <div className="activity-container">
      <div>
        <div className="activity-status">
          {currentStatus ? 'Activity' : 'No activity found'} on{' '}
          {getCurrentDate(date)}
          {currentStatus ? ':' : ''}
        </div>
        {currentStatus && (
          <>
            <NameGenerator label="Start time" name={currentStatus.start_time} />
            <NameGenerator label="End time" name={currentStatus.end_time} />
          </>
        )}
      </div>
      <button onClick={() => setIsCalender(true)}>Select date</button>
      {isCalender && <Calendar onChange={onChange} value={date} />}
    </div>
  );
};

export default ActivityContainer;
