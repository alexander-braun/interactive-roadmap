import {
  TOGGLE_CALENDAR_MODAL,
  AppActions,
  CalendarModal,
} from '../actions/constants';

export const calendarModal = (
  state: CalendarModal = ['', Date.now(), false],
  action: AppActions
): CalendarModal => {
  switch (action.type) {
    case TOGGLE_CALENDAR_MODAL:
      return [action.data[0], action.data[1], action.data[2]];
    default:
      return state;
  }
};
