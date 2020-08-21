import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

//Global State
import { AppState } from '../../reducers';

//Helper
import History from '../helper/history';
import { closeModalOnWrapperClick } from '../helper/closeModalOnWrapperClick';

//Actions
import {
  Comments,
  Dates,
  Headings,
  Recommendations,
  Statuses,
} from '../../actions';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DownloadPresetSvg from './DownloadPresetSvg';
import { Nodes } from '../types/Map-Data';

/**
 * Download Preset Modal to download the current map as JSON.
 * This is in case the user is not registered but still wants
 * to save progress.
 */

interface LoginModal {
  nodes: Nodes;
  comments: Comments;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  statuses: Statuses;
}

const DownloadPresetModal = ({
  nodes,
  comments,
  goalDates,
  headings,
  recommendations,
  statuses,
}: LoginModal) => {
  /**
   * JSON file
   */
  const [data, updateData] = useState<string>();

  /**
   * Creates the JSON file
   */
  useEffect(() => {
    const JSONOBJ = {
      nodes,
      comments,
      goalDates,
      headings,
      recommendations,
      statuses,
    };
    const newData =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(JSONOBJ));
    updateData(newData);
  }, [nodes, comments, goalDates, headings, recommendations, statuses]);

  return (
    <div className='modal' onClick={closeModalOnWrapperClick}>
      <div className='modal__body'>
        <FontAwesomeIcon
          icon={faTimes}
          className='modal__close'
          onClick={() => History.push('/')}
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
  nodes: Nodes;
  comments: Comments;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
  statuses: Statuses;
}

const mapStateToProps = (state: AppState): StateProps => ({
  nodes: state.nodes,
  comments: state.comments,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
  statuses: state.status,
});

export default connect(mapStateToProps)(DownloadPresetModal);
