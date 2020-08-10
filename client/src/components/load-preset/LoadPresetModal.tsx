import React, { useState, useEffect } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import LoadPresetSvg from './LoadPresetSvg';
import {
  Preset,
  ID,
  Comments,
  Dates,
  Headings,
  Recommendations,
  Statuses,
} from '../../actions/constants';
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
import { Nodes } from '../types/Map-Data';
import { updatePreset, addDefaultPreset } from '../../actions/presets';

interface LoginModal {
  isAuthenticated: boolean | null;
  presets: Preset[];
  user: PayloadUser | null;

  comments: Comments;
  nodes: Nodes;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  currentPreset: ID;
  status: Statuses;
}

const LoadPresetModal = ({
  isAuthenticated,
  presets,
  user,
  comments,
  nodes,
  goalDates,
  headings,
  recommendations,
  currentPreset,
  status,
}: LoginModal) => {
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

  const handleAddDefaultPreset = () => {
    if (user) {
      dispatch(
        addPreset({
          user,
          name: 'Frontend Developer',
          description: 'Default Frontend Developer Preset',
        })
      );
    }
  };

  const handleDeletePreset = (id: ID) => {
    dispatch(deletePreset(id));
  };

  const handleSave = () => {
    if (!isAuthenticated) History.push('/login');
    const preset = {
      comments,
      nodes,
      goalDates,
      headings,
      recommendations,
      status,
    };
    if (currentPreset) {
      dispatch(updatePreset(currentPreset, preset));
    }
  };

  useEffect(() => {
    let defaultExists = false;
    for (const preset of presets) {
      if (preset.name === 'Frontend Developer') {
        defaultExists = true;
        return;
      }
    }
    if (!defaultExists && user !== null) {
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
  }, []);

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
                      onClick={() => handleDeletePreset(preset._id)}
                      className='load-presets-modal__btn-delete load-presets-modal__btn'
                    >
                      Delete
                    </button>
                  )}
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
  isAuthenticated: boolean | null;
  presets: Preset[];
  user: PayloadUser | null;
  comments: Comments;
  nodes: Nodes;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  currentPreset: ID;
  status: Statuses;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  presets: state.presets,
  user: state.auth.user,

  comments: state.comments,
  nodes: state.nodes,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  currentPreset: state.currentPreset,
  status: state.status,
});

export default connect(mapStateToProps)(LoadPresetModal);
