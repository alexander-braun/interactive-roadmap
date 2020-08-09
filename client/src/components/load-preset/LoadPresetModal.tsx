import React, { useState, useEffect } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { login } from '../../actions/authenticate';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import LoadPresetSvg from './LoadPresetSvg';
import { Preset } from '../../actions/constants';
import { loadPresets } from '../../actions/presets';
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
import { PayloadUser, NewPreset } from '../../actions/constants';
import { addPreset } from '../../actions/presets';
import { v4 as uuidv4 } from 'uuid';

interface LoginModal {
  isAuthenticated: boolean | null;
  presets: Preset[];
  user: PayloadUser | null;
}

const LoadPresetModal = ({ isAuthenticated, presets, user }: LoginModal) => {
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
    History.push('/');
  };

  const handleStartNewMap = () => {
    if (user) {
      dispatch(addPreset({ user, name: 'New Preset' }));
    }
  };

  return (
    <div className='load-presets-modal' onClick={handleClick}>
      <div className='load-presets-modal__body'>
        <LoadPresetSvg />
        <h1>Your Presets</h1>
        {presets.length &&
          presets.map((preset) => {
            return (
              <div className='load-presets-modal__preset' key={uuidv4()}>
                <h3 className='load-presets-modal__preset-title'>
                  {preset.name}
                </h3>
                <button
                  onClick={() => handleLoadPreset(preset)}
                  className='load-presets-modal__btn'
                >
                  Load
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

interface StateProps {
  isAuthenticated: boolean | null;
  presets: Preset[];
  user: PayloadUser | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  presets: state.presets,
  user: state.auth.user,
});

export default connect(mapStateToProps)(LoadPresetModal);
