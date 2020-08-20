import React, { useState, useEffect } from 'react';
import History from '../helper/history';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import {
  Comments,
  Dates,
  Headings,
  Recommendations,
  Statuses,
} from '../../actions/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DownloadPresetSvg from './DownloadPresetSvg';
import { Nodes } from '../types/Map-Data';

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
  }, [nodes, comments, goalDates, headings, recommendations, statuses]);

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
