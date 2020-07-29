import { UPDATE_INVIEW_ELEMENTS, AppActions, InviewElement } from './constants';

export const updateInviewElements = (
  inviewElement: InviewElement
): AppActions => ({
  type: UPDATE_INVIEW_ELEMENTS,
  inviewElement,
});
