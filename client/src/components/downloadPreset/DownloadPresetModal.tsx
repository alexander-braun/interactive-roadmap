import React, { useState, useRef, useEffect, useCallback } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppState } from '../../reducers';
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
import { addDefaultPreset } from '../../actions/presets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DownloadPresetSvg from './DownloadPresetSvg';
import { Nodes } from '../types/Map-Data';

interface LoginModal {
  presets: Preset[];
  user: PayloadUser | null;
  currentPreset: ID;
  nodes: Nodes;
  comments: Comments;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  statuses: Statuses;
}

const DownloadPresetModal = ({
  presets,
  user,
  currentPreset,
  nodes,
  comments,
  goalDates,
  headings,
  recommendations,
  statuses,
}: LoginModal) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (
      target.classList.contains('modal') ||
      target.classList.contains('modal__close')
    ) {
      History.push('/');
    }
  };

  const handleClose = () => {
    History.push('/');
  };

  const [data, updateData] = useState<string>();

  useEffect(() => {
    const JSONOBJ = {
      nodes,
      comments,
      goalDates,
      headings,
      recommendations,
      statuses,
    };
    const data =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(JSONOBJ));
    updateData(data);
  });

  return (
    <div className='modal' onClick={handleClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={handleClose}
        />
        <DownloadPresetSvg />
        <div className='modal__add-new'>
          <form name='form' className='modal__form'>
            <a
              className='modal__btn modal__btn--active modal__btn--center'
              href={data}
              download='map.json'
            >
              Download
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

interface StateProps {
  presets: Preset[];
  user: PayloadUser | null;
  currentPreset: ID;
  nodes: Nodes;
  comments: Comments;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  statuses: Statuses;
}

const mapStateToProps = (state: AppState): StateProps => ({
  presets: state.presets,
  user: state.auth.user,
  currentPreset: state.currentPreset,
  nodes: state.nodes,
  comments: state.comments,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  statuses: state.status,
});

export default connect(mapStateToProps)(DownloadPresetModal);
