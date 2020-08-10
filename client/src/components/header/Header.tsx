import React from 'react';
import HeaderSvg from './HeaderSvg';
import { connect } from 'react-redux';
import { Preset, ID } from '../../actions/constants';
import { AppState } from '../../reducers';

export type IDs = [string, string][];

interface Header {
  currentPreset: ID;
  presets: Preset[];
}

function Header({ currentPreset, presets }: Header): JSX.Element {
  return (
    <div className='header'>
      <HeaderSvg />
      <h1 className='header__heading'>
        {currentPreset && presets && presets.length
          ? presets.map((preset) => preset._id === currentPreset && preset.name)
          : 'Frontend Developer'}
      </h1>
    </div>
  );
}

interface StateProps {
  currentPreset: ID;
  presets: Preset[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  currentPreset: state.currentPreset,
  presets: state.presets,
});

export default connect(mapStateToProps)(Header);
