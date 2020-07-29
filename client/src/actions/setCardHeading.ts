import { SET_CARD_HEADING, AppActions, CardHeading, ID } from './constants';

export const setCardHeading = (id: ID, heading: CardHeading): AppActions => ({
  type: SET_CARD_HEADING,
  id,
  heading,
});
