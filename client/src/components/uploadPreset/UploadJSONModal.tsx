import React, { useState, useRef, useEffect, useCallback } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import { Preset, ID, Comments } from '../../actions/constants';
import { deleteAllComments } from '../../actions/deleteAllComments';
import { deleteAllDates } from '../../actions/deleteAllDates';
import { deleteAllHeadings } from '../../actions/deleteAllHeadings';
import { deleteAllNodes } from '../../actions/deleteAllNodes';
import { deleteAllRecommendations } from '../../actions/deleteAllRecommendations';
import { deleteAllStatuses } from '../../actions/deleteAllStatuses';
import { addComments } from '../../actions/addComments';
import { addNodes } from '../../actions/addNodes';
import { addDates } from '../../actions/addDates';
import { addHeadings } from '../../actions/addHeadings';
import { addRecommendations } from '../../actions/addRecommendations';
import { addStatuses } from '../../actions/addStatuses';
import { PayloadUser } from '../../actions/constants';
import { addPreset, deletePreset } from '../../actions/presets';
import { v4 as uuidv4 } from 'uuid';
import { setCurrentPreset } from '../../actions/setCurrentPreset';
import { recommendation } from '../../roadmap-data/frontend-recommendation';
import { nodes as defaultNodes } from '../../roadmap-data/frontendmap';
import { frontendTitles as titles } from '../../roadmap-data/frontend-titles';
import { addDefaultPreset } from '../../actions/presets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UploadJSONSvg from './UploadJSONSvg';

interface LoginModal {
  presets: Preset[];
  user: PayloadUser | null;
  currentPreset: ID;
}

const LoadPresetModal = ({ presets, user, currentPreset }: LoginModal) => {
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
            <h1 className='modal__create-heading'>Upload Preset</h1>
            <div className='modal__form-group'>
              <label htmlFor='name'>Preset Name</label>
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
              Load Map!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface StateProps {
  presets: Preset[];
  user: PayloadUser | null;

  currentPreset: ID;
}

const mapStateToProps = (state: AppState): StateProps => ({
  presets: state.presets,
  user: state.auth.user,
  currentPreset: state.currentPreset,
});

export default connect(mapStateToProps)(LoadPresetModal);
