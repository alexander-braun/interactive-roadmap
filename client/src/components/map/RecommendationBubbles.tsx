import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCheck, faTimes, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { changeRecommendation } from '../../actions/changeRecommendation';
import { Recommendation } from '../../actions/constants';
import { useDispatch } from 'react-redux';

interface RecommendationBubbles {
  id: string;
  recommendation: Recommendation;
}

const RecommendationBubbles = ({
  id,
  recommendation,
}: RecommendationBubbles) => {
  const dispatch = useDispatch();
  const submitRecommendation = (recommendation: Recommendation): void => {
    dispatch(changeRecommendation(id, recommendation));
  };

  const check = (submit: boolean) => {
    return (
      <FontAwesomeIcon
        className='card__font-awesome-exclamation'
        icon={faCheck}
        onClick={() => (submit ? submitRecommendation('option') : null)}
      />
    );
  };

  const exclamation = (submit: boolean) => {
    return (
      <FontAwesomeIcon
        className='card__font-awesome-exclamation'
        icon={faExclamation}
        onClick={() => (submit ? submitRecommendation('recommended') : null)}
      />
    );
  };

  const times = (submit: boolean) => {
    return (
      <FontAwesomeIcon
        className='card__font-awesome-exclamation'
        icon={faTimes}
        onClick={() =>
          submit ? submitRecommendation('not-recommended') : null
        }
      />
    );
  };

  const pen = (submit: boolean) => {
    return (
      <FontAwesomeIcon
        className='card__font-awesome-exclamation'
        icon={faPenNib}
        onClick={() => (submit ? submitRecommendation('own') : null)}
      />
    );
  };

  return (
    <>
      <div className='card__indication-circle'>
        {recommendation === 'option'
          ? check(false)
          : recommendation === 'recommended'
          ? exclamation(false)
          : recommendation === 'not-recommended'
          ? times(false)
          : pen(false)}
      </div>
      <div className='card__recommend-choice'>
        <div className='card__indication-circle card__indication-circle--recommended'>
          {exclamation(true)}
        </div>
        <div className='card__indication-circle card__indication-circle--option'>
          {check(true)}
        </div>
        <div className='card__indication-circle card__indication-circle--not-recommended'>
          {times(true)}
        </div>
        <div className='card__indication-circle card__indication-circle--own-edit'>
          {pen(true)}
        </div>
      </div>
    </>
  );
};
export default RecommendationBubbles;
