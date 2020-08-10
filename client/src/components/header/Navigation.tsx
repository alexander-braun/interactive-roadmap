import React from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authenticate';
import {
  PayloadUser,
  Comments,
  Statuses,
  Dates,
  Headings,
  Recommendations,
  ID,
  Preset,
} from '../../actions/constants';
import History from '../helper/history';
import { Nodes } from '../types/Map-Data';
import { updatePreset } from '../../actions/presets';
import { loadPresets, addPreset } from '../../actions//presets';

export type IDs = [string, string][];

interface Navigation {
  isAuthenticated: boolean | null;
  user: PayloadUser | null;

  nodes: Nodes;
  comments: Comments;
  status: Statuses;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  currentPreset: ID;
  presets: Preset[];
}

function Navigation({
  isAuthenticated,
  user,
  nodes,
  comments,
  status,
  goalDates,
  headings,
  recommendations,
  currentPreset,
  presets,
}: Navigation): JSX.Element {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
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

  const handleLoadClick = () => {
    dispatch(loadPresets());
  };

  return (
    <>
      <div className='menue-bar__spaceholder'></div>
      <div className='menue-bar'>
        <Link to='/' className='menue-bar__title'>
          Interactive Roadmap
        </Link>
        <div className='menue-bar__links'>
          {currentPreset && (
            <button className='menue-bar__link' onClick={handleSave}>
              Save
              <span className='menue-bar__free-indicator'>(current Map)</span>
            </button>
          )}
          <Link
            to={`${isAuthenticated ? '/load' : '/login'}`}
            className='menue-bar__link'
            onClick={handleLoadClick}
          >
            Load
          </Link>

          {!isAuthenticated ? (
            <>
              <Link to='/login' className='menue-bar__link'>
                Login
              </Link>
              <Link to='/register' className='menue-bar__link'>
                Register
                <span className='menue-bar__free-indicator'>(free)</span>
              </Link>
            </>
          ) : (
            <button className='menue-bar__link' onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}

interface StateProps {
  isAuthenticated: boolean | null;
  user: PayloadUser | null;
  nodes: Nodes;
  comments: Comments;
  status: Statuses;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  currentPreset: ID;
  presets: Preset[];
}

const mapStateToProps = (state: AppState): StateProps => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  nodes: state.nodes,
  comments: state.comments,
  status: state.status,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  currentPreset: state.currentPreset,
  presets: state.presets,
});

export default connect(mapStateToProps)(Navigation);
