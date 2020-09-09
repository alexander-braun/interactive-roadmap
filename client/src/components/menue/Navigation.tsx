import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

//Global State
import { AppState } from '../../reducers';

//Actions
import {
  PayloadUser,
  Comments,
  Statuses,
  Dates,
  Headings,
  Recommendations,
  ID,
  Preset,
  logout,
  updatePreset,
  loadPresets,
  setCurrentPreset,
  deleteAllComments,
  deleteAllDates,
  deleteAllHeadings,
  deleteAllNodes,
  deleteAllRecommendations,
  deleteAllStatuses,
  addComments,
  addNodes,
  addDates,
  addHeadings,
  addStatuses,
  addRecommendations,
  toggleSidenav,
} from '../../actions';

//Helper
import History from '../helper/history';

//Types
import { Nodes } from '../types/Map-Data';

//Default Data
import { nodes as defaultNodes } from '../../roadmap-data/frontendmap';
import { recommendation } from '../../roadmap-data/frontend-recommendation';
import { frontendTitles } from '../../roadmap-data/frontend-titles';

/**
 * Top navigation bar
 */

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
  sideWidth: number;
}

function Navigation({
  isAuthenticated,
  nodes,
  comments,
  status,
  goalDates,
  headings,
  recommendations,
  currentPreset,
  sideWidth,
}: Navigation): JSX.Element {
  const dispatch = useDispatch();

  /**
   * On logout all current preset map data has to be removed.
   * In addition the default map data has to be added in.
   */
  const handleLogout = () => {
    dispatch(logout());
    dispatch(deleteAllComments());
    dispatch(deleteAllDates());
    dispatch(deleteAllHeadings());
    dispatch(deleteAllNodes());
    dispatch(deleteAllRecommendations());
    dispatch(deleteAllStatuses());
    dispatch(setCurrentPreset(''));
    const comments = {};
    dispatch(addComments(comments));
    dispatch(addNodes(defaultNodes));
    dispatch(addDates({}));
    dispatch(addHeadings(frontendTitles));
    dispatch(addRecommendations(recommendation));
    dispatch(addStatuses({}));
    dispatch(setCurrentPreset(''));
  };

  /**
   * Saves the current visible map OR leads to
   * /login if the user is not authenticated.
   */
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

  /**
   * On click the presets have to start loading so they
   * can display in the load preset dialoge.
   */
  const handleLoadClick = () => {
    dispatch(loadPresets());
  };

  /**
   * Hamburger menue toggle logic
   */
  const [hamburgerClasslist, togglehamburgerClasslist] = useState(
    'menue-bar__menu-btn'
  );

  const handleHamburgerClick = () => {
    if (hamburgerClasslist.indexOf('menue-bar__menu-btn--open') >= 0) {
      togglehamburgerClasslist('menue-bar__menu-btn');
      dispatch(toggleSidenav());
    } else {
      togglehamburgerClasslist('menue-bar__menu-btn menue-bar__menu-btn--open');
      dispatch(toggleSidenav());
    }
  };

  return (
    <>
      <div className='menue-bar__spaceholder'></div>
      <nav className='menue-bar'>
        <Link to='/' className='menue-bar__title'>
          Interactive Roadmap
        </Link>
        {sideWidth >= 1100 ? null : (
          <div
            role='button'
            className={hamburgerClasslist}
            onClick={handleHamburgerClick}
            aria-label='Open Sidenavigation'
            aria-pressed={
              hamburgerClasslist.indexOf('menue-bar__menu-btn--open') >= 0
                ? true
                : false
            }
            tabIndex={0}
          >
            <div className='menue-bar__burger'></div>
          </div>
        )}
        <div className='menue-bar__links'>
          {!isAuthenticated && (
            <>
              <Link to='/login' className='menue-bar__link'>
                Login
              </Link>
              <Link to='/register' className='menue-bar__link'>
                Register
                <span className='menue-bar__free-indicator'>(free)</span>
              </Link>
            </>
          )}
          {(currentPreset.length || isAuthenticated) && (
            <button className='menue-bar__link' onClick={handleSave}>
              Save
            </button>
          )}
          {isAuthenticated && (
            <Link
              to={`${isAuthenticated ? '/load' : '/login'}`}
              className='menue-bar__link'
              onClick={handleLoadClick}
            >
              Load
            </Link>
          )}
          <Link to='/upload-json' className='menue-bar__link'>
            Upload<span className='menue-bar__free-indicator'>(JSON)</span>
          </Link>
          <Link to='/download-json' className='menue-bar__link'>
            Download<span className='menue-bar__free-indicator'>(as JSON)</span>
          </Link>
          {isAuthenticated && (
            <>
              <Link to='/profile-settings' className='menue-bar__link'>
                Profile
              </Link>
              <button className='menue-bar__link' onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
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
