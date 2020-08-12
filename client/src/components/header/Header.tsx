import React from 'react';
import HeaderSvg from './HeaderSvg';
import { connect } from 'react-redux';
import { Preset, ID } from '../../actions/constants';
import { AppState } from '../../reducers';
import { v4 as uuidv4 } from 'uuid';

export type IDs = [string, string][];

interface Header {
  currentPreset: ID;
  presets: Preset[];
  isAuthenticated: boolean | null;
}

function Header({
  currentPreset,
  presets,
  isAuthenticated,
}: Header): JSX.Element {
  return (
    <div className='header'>
      <HeaderSvg />
      {currentPreset.length && presets.length ? (
        presets.map(
          (preset) =>
            preset._id === currentPreset && (
              <div className='header__wrapper' key={uuidv4()}>
                <h1 className='header__heading'>{preset.name}</h1>
                <h4 className='header__subheading'>{preset.description}</h4>
              </div>
            )
        )
      ) : isAuthenticated ? (
        <h1 className='header__heading'>No preset loaded</h1>
      ) : (
        <div className='header__wrapper' key={uuidv4()}>
          <h1 className='header__heading'>Frontend Developer</h1>
          <h4 className='header__subheading'>Default Frontend Roadmap</h4>
        </div>
      )}
    </div>
  );
}

interface StateProps {
  currentPreset: ID;
  presets: Preset[];
  isAuthenticated: boolean | null;
}

const mapStateToProps = (state: AppState): StateProps => ({
  currentPreset: state.currentPreset,
  presets: state.presets,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Header);
