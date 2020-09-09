import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

//Components
import HeaderSvg from './HeaderSvg';

//Actions
import { Preset, ID } from '../../actions';

//Global State
import { AppState } from '../../reducers';

/**
 * Header displays the current preset name and description as
 * well as different svg graphics.
 */

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
    <header className='header'>
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
        <div className='header__wrapper'>
          <h1 className='header__heading'>No preset loaded</h1>
        </div>
      ) : (
        <div className='header__wrapper' key={uuidv4()}>
          <h1 className='header__heading'>Frontend Developer</h1>
          <h2 className='header__subheading'>Default Frontend Roadmap</h2>
        </div>
      )}
    </header>
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
