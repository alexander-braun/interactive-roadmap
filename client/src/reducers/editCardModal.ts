import {
  TOGGLE_EDIT_CARD_MODAL,
  AppActions,
  EditCardModalOpen,
} from '../actions/constants';

export const editCardModal = (
  state: EditCardModalOpen = ['', false],
  action: AppActions
): EditCardModalOpen => {
  switch (action.type) {
    case TOGGLE_EDIT_CARD_MODAL:
      const id = action.id;
      return [id, !state[1]];
    default:
      return state;
  }
};
