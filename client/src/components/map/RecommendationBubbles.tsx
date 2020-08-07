import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { changeRecommendation } from '../../actions/changeRecommendation';
import { Recommendations, Recommendation } from '../../actions/constants';
import { useDispatch } from 'react-redux';

interface RecommendationBubbles {
  id: string;
}

const RecommendationBubbles = ({ id }: RecommendationBubbles) => {
  const dispatch = useDispatch();
  const submitRecommendation = (recommendation: Recommendation): void => {
    dispatch(changeRecommendation(id, recommendation));
  };

  return (
    <div className='card__recommend-choice'>
      <div className='card__indication-circle card__indication-circle--recommended'>
        <FontAwesomeIcon
          className='card__font-awesome-exclamation'
          icon={faExclamation}
          onClick={() => submitRecommendation('recommended')}
        />
      </div>
      <div className='card__indication-circle card__indication-circle--option'>
        <FontAwesomeIcon
          className='card__font-awesome-exclamation'
          icon={faCheck}
          onClick={() => submitRecommendation('option')}
        />
      </div>
      <div
        className='card__indication-circle card__indication-circle--not-recommended'
        onClick={() => submitRecommendation('not-recommended')}
      ></div>
    </div>
  );
};
export default RecommendationBubbles;
