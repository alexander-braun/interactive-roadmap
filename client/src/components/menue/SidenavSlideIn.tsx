import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import {
  Comments,
  Dates,
  Headings,
  Recommendations,
  Statuses,
} from '../../actions/constants';
import { Nodes } from '../types/Map-Data';
import { useDispatch } from 'react-redux';
import History from '../helper/history';
import { updatePreset, loadPresets } from '../../actions/presets';
import { Link } from 'react-router-dom';
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
import { addStatuses } from '../../actions/addStatuses';
import { addRecommendations } from '../../actions/addRecommendations';
import { setCurrentPreset } from '../../actions/setCurrentPreset';
import { logout } from '../../actions/authenticate';
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

  const handleLogout = () => {
    dispatch(logout());
    dispatch(deleteAllComments());
    dispatch(deleteAllDates());
    dispatch(deleteAllHeadings());
    dispatch(deleteAllNodes());
    dispatch(deleteAllRecommendations());
    dispatch(deleteAllStatuses());
    dispatch(setCurrentPreset(''));
    const comments = { '2cfc0a72-712d-4b59-896b-e4ce8ef91d01': ['Edit me!'] };
    dispatch(addComments(comments));
    dispatch(addNodes(defaultNodes));
    dispatch(addDates({}));
    dispatch(addHeadings(frontendTitles));
    dispatch(addRecommendations(recommendation));
    dispatch(addStatuses({}));
    dispatch(setCurrentPreset(''));
  };
  return (
    <div className={`sidenav${sidenav ? ' sidenav--visible' : ''}`}>
      <div className='sidenav__links'>
        {!isAuthenticated ? (
          <>
            <Link to='/login' className='sidenav__link'>
              Login
            </Link>
            <Link to='/register' className='sidenav__link'>
              Register
              <span className='sidenav__free-indicator'>(free)</span>
            </Link>
          </>
        ) : (
          <>
            <button className='sidenav__link' onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
        {(currentPreset.length || !isAuthenticated) && (
          <button className='sidenav__link' onClick={handleSave}>
            Save
            <span className='sidenav__free-indicator'>(current Map)</span>
          </button>
        )}
        <Link
          to={`${isAuthenticated ? '/load' : '/login'}`}
          className='sidenav__link'
          onClick={handleLoadClick}
        >
          Load
        </Link>

        <Link to='/upload-json' className='sidenav__link'>
          Upload<span className='sidenav__free-indicator'>(JSON)</span>
        </Link>
        <Link to='/download-json' className='sidenav__link'>
          Download<span className='sidenav__free-indicator'>(as JSON)</span>
        </Link>
      </div>
    </div>
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
