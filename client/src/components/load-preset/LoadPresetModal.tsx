import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Components
import LoadPresetSvg from './LoadPresetSvg';

//Default Data
import { recommendation } from '../../roadmap-data/frontend-recommendation';
import { nodes as defaultNodes } from '../../roadmap-data/frontendmap';
import { frontendTitles as titles } from '../../roadmap-data/frontend-titles';

//Actions
import {
  setCurrentPreset,
  Preset,
  ID,
  deleteAllComments,
  deleteAllDates,
  deleteAllHeadings,
  deleteAllNodes,
  deleteAllRecommendations,
  deleteAllStatuses,
  addDefaultPreset,
  addPreset,
  deletePreset,
  PayloadUser,
  addStatuses,
  addRecommendations,
  addHeadings,
  addDates,
  addNodes,
  addComments,
} from '../../actions';

//Global State
import { AppState } from '../../reducers';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Load Presets Modal with all saved presets and create new preset functionality
 */

interface LoginModal {
  presets: Preset[];
  user: PayloadUser | null;
  currentPreset: ID;
}

const LoadPresetModal = ({ presets, user, currentPreset }: LoginModal) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    History.push('/');
  };

  /**
   * Removes all current map-state
   * Adds the new state from the chosen preset
   */
  const handleLoadPreset = (preset: Preset) => {
    dispatch(deleteAllComments());
    dispatch(deleteAllDates());
    dispatch(deleteAllHeadings());
    dispatch(deleteAllNodes());
    dispatch(deleteAllRecommendations());
    dispatch(deleteAllStatuses());
    preset.comments && dispatch(addComments(preset.comments));
    dispatch(addNodes(preset.nodes));
    preset.goalDates && dispatch(addDates(preset.goalDates));
    dispatch(addHeadings(preset.headings));
    preset.recommendations &&
      dispatch(addRecommendations(preset.recommendations));
    preset.statuses && dispatch(addStatuses(preset.statuses));
    dispatch(setCurrentPreset(preset._id));
    History.push('/');
  };

  /**
   * Formdata and belonging update function
   */
  const [formData, updateFormdata] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Try to save the new preset to the db
   */
  const handleAddPreset = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (user && formData.name.length) {
      for (const preset of presets) {
        if (preset.name === formData.name) {
          updateFormdata({ name: '', description: '' });
          return;
        }
      }
      dispatch(
        addPreset({
          user,
          name: formData.name,
          description: formData.description,
        })
      );
    }
    updateFormdata({ name: '', description: '' });
  };

  /**
   * Deletes the selected preset from the db.
   * If the deleted preset === the current map,
   * the current map is also removed.
   */
  const handleDeletePreset = useCallback(
    (id: ID, restore: boolean) => {
      dispatch(deletePreset(id));
      if (currentPreset === id) {
        dispatch(setCurrentPreset(''));
        dispatch(deleteAllComments());
        dispatch(deleteAllDates());
        dispatch(deleteAllHeadings());
        dispatch(deleteAllNodes());
        dispatch(deleteAllRecommendations());
        dispatch(deleteAllStatuses());
      }
      if (restore) {
        setTimeout(() => History.push('/load'));
      }
    },
    [currentPreset, dispatch]
  );

  /**
   * Helper to check if the default Frontend Developer
   * map is already loaded to the the users maps.
   */
  const checkIfDefaultPreset = useCallback((): [boolean, string] => {
    for (const preset of presets) {
      if (preset.name === 'Frontend Developer') {
        return [true, preset._id];
      }
    }
    return [false, ''];
  }, [presets]);

  /**
   * Creates the default Frontend Developer preset for the user.
   */
  const createDefaultPreset = useCallback(() => {
    if (user !== null) {
      const comments = {};
      dispatch(
        addDefaultPreset({
          user,
          nodes: defaultNodes,
          comments,
          recommendations: recommendation,
          headings: titles,
          name: 'Frontend Developer',
          description: 'Default Frontend Roadmap',
          statuses: {}
        })
      );
    }
  }, [dispatch, user]);

  /**
   * Opens the edit preset subdialogue
   */
  const handleEditPreset = (id: ID) => {
    History.push(`/edit-preset/${id}`);
  };

  /**
   * If there is no default preset
   * Create a new default preset
   */
  useEffect(() => {
    if (!checkIfDefaultPreset()[0] && user !== null) {
      createDefaultPreset();
      dispatch(setCurrentPreset(''));
    }
  }, [presets, checkIfDefaultPreset, createDefaultPreset, dispatch, user]);

  return (
    <div className='modal' onClick={closeModalOnWrapperClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={handleClose}
        />
        <LoadPresetSvg />
        <div className='modal__presets'>
          <h1>Your Presets</h1>
          {presets.length && presets[0].name !== '' ? (
            presets.map((preset) => {
              return (
                <div className='modal__preset' key={uuidv4()}>
                  <h3 className='modal__preset-title'>{preset.name}</h3>
                  <button
                    onClick={() => handleLoadPreset(preset)}
                    className='modal__btn-load modal__btn'
                  >
                    Load
                  </button>
                  {preset.name !== 'Frontend Developer' && (
                    <button
                      onClick={() => handleDeletePreset(preset._id, false)}
                      className='modal__btn-delete modal__btn'
                    >
                      Delete
                    </button>
                  )}
                  {preset.name === 'Frontend Developer' && (
                    <button
                      onClick={() => {
                        handleDeletePreset(preset._id, true);
                      }}
                      className='modal__btn-delete modal__btn'
                    >
                      Restore
                    </button>
                  )}
                  <button
                    onClick={() => handleEditPreset(preset._id)}
                    className='modal__btn-delete modal__btn'
                  >
                    Edit
                  </button>
                </div>
              );
            })
          ) : (
            <div className='modal__no-presets'>You have no saved presets.</div>
          )}
        </div>
        <div className='modal__add-new'>
          <form name='form' className='modal__form'>
            <h1 className='modal__create-heading'>Create new</h1>
            <div className='modal__form-group'>
              <label htmlFor='name'>Preset Name</label>
              <input
                type='name'
                className='modal__form-control'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='modal__form-group'>
              <label htmlFor='description'>Preset Description</label>
              <input
                type='description'
                className='modal__form-control'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button
              className='modal__btn modal__btn--active'
              onClick={handleAddPreset}
            >
              Add New!
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
