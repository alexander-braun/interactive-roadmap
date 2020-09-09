import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

//Global state type
import { AppState } from '../../reducers';

//Actions
import {
  Comments,
  Statuses,
  Dates,
  Headings,
  Recommendations,
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
} from '../../actions';

//types
import { Nodes } from '../types/Map-Data';

//Helpers
import History from '../helper/history';

//Default data
import { nodes as defaultNodes } from '../../roadmap-data/frontendmap';
import { recommendation } from '../../roadmap-data/frontend-recommendation';
import { frontendTitles } from '../../roadmap-data/frontend-titles';

interface SidenavSlideIn {
  sidenav: boolean;
  currentPreset: string;
  isAuthenticated: boolean | null;
  comments: Comments;
  nodes: Nodes;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  status: Statuses;
}

const SidenavSlideIn = ({
  sidenav,
  currentPreset,
  isAuthenticated,
  comments,
  nodes,
  goalDates,
  headings,
  recommendations,
  status,
}: SidenavSlideIn) => {
  const dispatch = useDispatch();

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

  return (
    <nav className={`sidenav${sidenav ? ' sidenav--visible' : ''}`}>
      <div className='sidenav__links'>
        {!isAuthenticated && (
          <>
            <Link to='/login' className='sidenav__link'>
              Login
            </Link>
            <Link to='/register' className='sidenav__link'>
              Register
              <span className='sidenav__free-indicator'>(free)</span>
            </Link>
          </>
        )}
        {(currentPreset.length || isAuthenticated) && (
          <button className='sidenav__link' onClick={handleSave}>
            Save
            <span className='sidenav__free-indicator'>(current Map)</span>
          </button>
        )}
        {isAuthenticated && (
          <Link
            to={`${isAuthenticated ? '/load' : '/login'}`}
            className='sidenav__link'
            onClick={handleLoadClick}
          >
            Load
          </Link>
        )}
        <Link to='/upload-json' className='sidenav__link'>
          Upload<span className='sidenav__free-indicator'>(JSON)</span>
        </Link>
        <Link to='/download-json' className='sidenav__link'>
          Download<span className='sidenav__free-indicator'>(as JSON)</span>
        </Link>
        {isAuthenticated && (
          <>
            <Link to='/profile-settings' className='sidenav__link'>
              Profile
            </Link>
            <button className='sidenav__link' onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

interface StateProps {
  sidenav: boolean;
  currentPreset: string;
  isAuthenticated: boolean | null;
  comments: Comments;
  nodes: Nodes;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  status: Statuses;
}

const mapStateToProps = (state: AppState): StateProps => ({
  sidenav: state.sidenav,
  currentPreset: state.currentPreset,
  isAuthenticated: state.auth.isAuthenticated,
  comments: state.comments,
  nodes: state.nodes,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  status: state.status,
});

export default connect(mapStateToProps)(SidenavSlideIn);
