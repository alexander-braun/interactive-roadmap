import {
  PRESET_ERROR,
  LOAD_PRESETS,
  ADD_PRESET,
  DELETE_PRESET_SUCCESS,
  DELETE_PRESET_ERROR,
  AppActions,
  Preset,
} from '../actions/constants';

const initialState: Preset[] = [
  {
    user: {
      date: '',
      email: '',
      name: '',
      __v: 0,
      _id: '',
    },
    name: '',
    date: '',
    nodes: {},
    headings: {},
    statuses: {},
    __v: 0,
    _id: '',
  },
];

export const presets = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case ADD_PRESET:
      return [...state, action.payload];
    case LOAD_PRESETS:
      return action.payload;
    case PRESET_ERROR:
    case DELETE_PRESET_ERROR:
      return state;
    case DELETE_PRESET_SUCCESS:
      return state.filter((preset) => preset._id !== action.id);
    default:
      return state;
  }
};
