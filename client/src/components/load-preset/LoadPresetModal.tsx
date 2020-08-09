import React, { useState, useEffect } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { login } from '../../actions/authenticate';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
import LoadPresetSvg from './LoadPresetSvg';
import { Preset } from '../../actions/constants';

interface LoginModal {
  isAuthenticated: boolean | null;
  presets: Preset[];
}

const LoadPresetModal = ({ isAuthenticated, presets }: LoginModal) => {
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains('login-modal')) {
      History.push('/');
    }
  };

  return (
    <div className='load-presets-modal' onClick={handleClick}>
      <div className='load-presets-modal__body'>
        <LoadPresetSvg />
        <h1>Your Presets</h1>
        {presets.map((preset) => {
          return (
            <div className='load-presets-modal__preset'>
              <h2 className='load-presets-modal__preset-title'>
                {preset.name}
              </h2>
              <button className='load-presets-modal__load-button'>Load</button>
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
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  presets: state.presets,
});

export default connect(mapStateToProps)(LoadPresetModal);
