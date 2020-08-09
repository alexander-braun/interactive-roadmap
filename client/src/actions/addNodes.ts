import { ADD_NODES, AppActions } from './constants';
import { Nodes } from '../components/types/Map-Data';

export const addNodes = (nodes: Nodes): AppActions => ({
  type: ADD_NODES,
  nodes,
});
