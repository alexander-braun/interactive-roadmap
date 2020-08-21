import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

//Global state
import { AppState } from '../../reducers';

//Actions
import {
  toggleCalendarModal,
  CalendarModal as CalendarModalType,
  changeDate,
} from '../../actions';

interface Modal {
  calendarModal: CalendarModalType;
}

const CalendarModal = ({ calendarModal }: Modal) => {
  const dispatch = useDispatch();

  /**
   * Calendar modal visibility state is handled by redux.
   * [ID of card, time in ms, visible]
   */
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('calendar-modal')) {
      dispatch(toggleCalendarModal(['', 0, false]));
    }
  };

  const [date, updateDate] = useState<Date>(new Date(calendarModal[1]));

  /**
   * Update local state: date
   * Apparently a range select is possible so check if array.
   */
  const handleChange = (e: Date | Date[]) => {
    if (!Array.isArray(e)) {
      updateDate(e);
    }
  };

  useEffect(() => {
    dispatch(changeDate(calendarModal[0], date.getTime()));
  }, [date, calendarModal, dispatch]);

  if (!calendarModal[2]) return null;
  else
    return (
      <div className='calendar-modal modal' onClick={(e) => handleClick(e)}>
        <Calendar
          className='calendar-modal__calendar'
          onChange={handleChange}
          value={date}
        />
      </div>
    );
};

interface StateProps {
  calendarModal: CalendarModalType;
}

const mapStateToProps = (state: AppState): StateProps => ({
  calendarModal: state.calendarModal,
});

export default connect(mapStateToProps)(CalendarModal);
