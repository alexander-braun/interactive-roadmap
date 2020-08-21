import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Actions
import {
  addComments,
  addNodes,
  addDates,
  addHeadings,
  addRecommendations,
  addStatuses,
} from '../../actions';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Components
import UploadJSONSvg from './UploadJSONSvg';

const LoadPresetModal = () => {
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * Import the uploaded file and send it to redux.
   */
  const importJSON = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const target = inputRef.current as HTMLInputElement;
    const files = target.files;
    if (files) {
      const file = files[0];
      const Reader = new FileReader();
      let data;
      Reader.onload = (event) => {
        if (event.target && event.target.result) {
          const stringCast = event.target.result as string;
          data = JSON.parse(stringCast);

          if (
            data.comments &&
            data.nodes &&
            data.goalDates &&
            data.headings &&
            data.recommendations &&
            data.statuses
          ) {
            dispatch(addComments(data.comments));
            dispatch(addNodes(data.nodes));
            dispatch(addDates(data.goalDates));
            dispatch(addHeadings(data.headings));
            dispatch(addRecommendations(data.recommendations));
            dispatch(addStatuses(data.statuses));
          }
        }
      };
      Reader.readAsText(file);
    }
    History.push('/');
  };

  return (
    <div className='modal' onClick={closeModalOnWrapperClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={() => History.push('/')}
        />
        <UploadJSONSvg />
        <div className='modal__add-new'>
          <form name='form' className='modal__form'>
            <h1 className='modal__create-heading'>Upload JSON</h1>
            <div className='modal__form-group'>
              <label htmlFor='name'>Choose File</label>
              <input
                ref={inputRef}
                type='file'
                className='modal__form-control'
                name='name'
              />
            </div>
            <button
              className='modal__btn modal__btn--active'
              onClick={(e) => importJSON(e)}
            >
              Load as Map!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoadPresetModal;
