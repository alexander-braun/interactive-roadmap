import { TOGGLE_CALENDAR_MODAL, AppActions, CalendarModal } from './constants';

export const toggleCalendarModal = (data: CalendarModal): AppActions => ({
  type: TOGGLE_CALENDAR_MODAL,
  data,
});
