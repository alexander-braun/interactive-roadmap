import axios from 'axios';
import {
  LOAD_PRESETS,
  PRESET_ERROR,
  ADD_PRESET,
  DELETE_PRESET_SUCCESS,
  DELETE_PRESET_ERROR,
  UPDATE_PRESET_SUCCESS,
  UPDATE_PRESET_ERROR,
  SavePreset,
  NewPreset,
  ID,
  AddDefaultPreset,
} from './constants';

//Thunk dispatch stuff
import { Action } from 'redux';
import { AppState } from '../reducers/index';
import { ThunkAction } from 'redux-thunk';

//Load all presets
export const loadPresets = (): ThunkAction<
  void,
  AppState,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const res = await axios.get('/api/presets');
    dispatch({
      type: LOAD_PRESETS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRESET_ERROR,
    });
  }
};

//Add Preset
export const addPreset = (
  formData: NewPreset
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/presets', formData, config);
    dispatch({
      type: ADD_PRESET,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRESET_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Add Default Preset
export const addDefaultPreset = (
  formData: AddDefaultPreset
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/presets', formData, config);
    dispatch({
      type: ADD_PRESET,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PRESET_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//Update a preset
export const updatePreset = (
  id: ID,
  preset: SavePreset
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const res = await axios.put(`/api/presets/${id}`, preset);
    dispatch({
      type: UPDATE_PRESET_SUCCESS,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    console.error('ERROR', error);
    dispatch({
      type: UPDATE_PRESET_ERROR,
    });
  }
};

//Delete a preset
export const deletePreset = (
  id: ID
): ThunkAction<void, AppState, unknown, Action<string>> => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/presets/${id}`);
    dispatch({
      type: DELETE_PRESET_SUCCESS,
      payload: res.data,
      id: id,
    });
  } catch (error) {
    console.error('ERROR', error);
    dispatch({
      type: DELETE_PRESET_ERROR,
    });
  }
};
