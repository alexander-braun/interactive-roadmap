import { UPDATE_CURRENT_PRESET, AppActions, ID } from './constants';

export const setCurrentPreset = (presetId: ID): AppActions => ({
  type: UPDATE_CURRENT_PRESET,
  presetId,
});
