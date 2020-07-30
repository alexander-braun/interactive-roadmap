import { TOGGLE_EDIT_CARD_MODAL, AppActions, ID } from './constants';

export const toggleEditCardModal = (id: ID): AppActions => ({
  type: TOGGLE_EDIT_CARD_MODAL,
  id,
});
