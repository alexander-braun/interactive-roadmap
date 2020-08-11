import React, { useState, useEffect, useCallback } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import LoadPresetSvg from './LoadPresetSvg';
import { Preset, ID } from '../../actions/constants';
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

interface LoginModal {
  presets: Preset[];
  user: PayloadUser | null;
  currentPreset: ID;
}

const LoadPresetModal = ({ presets, user, currentPreset }: LoginModal) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('load-presets-modal')) {
      History.push('/');
    }
  };

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

  const [formData, updateFormdata] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormdata({ ...formData, [e.target.name]: e.target.value });
  };

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

  const checkIfDefaultPreset = useCallback((): [boolean, string] => {
    for (const preset of presets) {
      if (preset.name === 'Frontend Developer') {
        return [true, preset._id];
      }
    }
    return [false, ''];
  }, [presets]);

  const createDefaultPreset = useCallback(() => {
    let oldID: ID = '';
    if (checkIfDefaultPreset()[0]) {
      oldID = checkIfDefaultPreset()[1];
    }
    if (user !== null) {
      const comments = {
        '2cfc0a72-712d-4b59-896b-e4ce8ef91d01': ['Edit me!'],
      };
      dispatch(
        addDefaultPreset({
          user: user,
          nodes: defaultNodes,
          comments: comments,
          recommendations: recommendation,
          headings: titles,
          name: 'Frontend Developer',
          description: 'Default Frontend Roadmap',
        })
      );
    }
    if (oldID.length) {
      handleDeletePreset(oldID, false);
      dispatch(setCurrentPreset(''));
    }
  }, [checkIfDefaultPreset, dispatch, handleDeletePreset, user]);

  const handleEditPreset = (id: ID) => {
    History.push(`/edit-preset/${id}`);
  };

  useEffect(() => {
    if (!checkIfDefaultPreset()[0] && user !== null) {
      createDefaultPreset();
      dispatch(setCurrentPreset(''));
    }
  }, [presets, checkIfDefaultPreset, createDefaultPreset, dispatch, user]);

  useEffect(() => {
    let times = 0;
    for (const preset of presets) {
      if (preset.name === 'Frontend Developer') {
        times++;
        if (times === 2) {
          handleDeletePreset(preset._id, true);
        }
      }
    }
  });

  return (
    <div className='load-presets-modal' onClick={handleClick}>
      <div className='load-presets-modal__body'>
        <LoadPresetSvg />
        <div className='load-presets-modal__presets'>
          <h1>Your Presets</h1>
          {presets.length ? (
            presets.map((preset) => {
              return (
                <div className='load-presets-modal__preset' key={uuidv4()}>
                  <h3 className='load-presets-modal__preset-title'>
                    {preset.name}
                  </h3>
                  <button
                    onClick={() => handleLoadPreset(preset)}
                    className='load-presets-modal__btn-load load-presets-modal__btn'
                  >
                    Load
                  </button>
                  {preset.name !== 'Frontend Developer' && (
                    <button
                      onClick={() => handleDeletePreset(preset._id, false)}
                      className='load-presets-modal__btn-delete load-presets-modal__btn'
                    >
                      Delete
                    </button>
                  )}
                  {preset.name === 'Frontend Developer' && (
                    <button
                      onClick={() => {
                        handleDeletePreset(preset._id, true);
                      }}
                      className='load-presets-modal__btn-delete load-presets-modal__btn'
                    >
                      Restore
                    </button>
                  )}
                  <button
                    onClick={() => handleEditPreset(preset._id)}
                    className='load-presets-modal__btn-delete load-presets-modal__btn'
                  >
                    Edit
                  </button>
                </div>
              );
            })
          ) : (
            <div className='load-presets-modal__no-presets'>
              You have no saved presets.
            </div>
          )}
        </div>
        <div className='load-presets-modal__add-new'>
          <form name='form' className='load-presets-modal__form'>
            <h1 className='load-presets-modal__create-heading'>Create new</h1>
            <div className='load-presets-modal__form-group'>
              <label htmlFor='name'>Preset Name</label>
              <input
                type='name'
                className='load-presets-modal__form-control'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='load-presets-modal__form-group'>
              <label htmlFor='description'>Preset Description</label>
              <input
                type='description'
                className='load-presets-modal__form-control'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <button
              className='load-presets-modal__btn load-presets-modal__btn--active'
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
