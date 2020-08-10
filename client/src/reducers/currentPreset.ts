import { AppActions, UPDATE_CURRENT_PRESET, ID } from '../actions/constants';

const initialState = '';

export const currentPreset = (
  state: ID = initialState,
  action: AppActions
): ID => {
  switch (action.type) {
    case UPDATE_CURRENT_PRESET:
      return action.presetId;
    default:
      return state;
  }
};
