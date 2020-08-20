import React, { useRef } from 'react';
import History from '../helper/history';
import { useDispatch } from 'react-redux';
import { addComments } from '../../actions/addComments';
import { addNodes } from '../../actions/addNodes';
import { addDates } from '../../actions/addDates';
import { addHeadings } from '../../actions/addHeadings';
import { addRecommendations } from '../../actions/addRecommendations';
import { addStatuses } from '../../actions/addStatuses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UploadJSONSvg from './UploadJSONSvg';

const LoadPresetModal = () => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (
      target.classList.contains('modal') ||
      target.classList.contains('modal__close')
    ) {
      History.push('/');
    }
  };

  const handleClose = () => {
    History.push('/');
  };

  const inputRef = useRef<HTMLInputElement>(null);

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
  };

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={handleClose}
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
