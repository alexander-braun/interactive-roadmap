import React from 'react';
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
      <div
        className={`card__font-awesome-exclamation ${
          !submit ? 'card__font-awesome-exclamation--main' : ''
        }`}
        onClick={() => (submit ? submitRecommendation('option') : null)}
      >
        ✓
      </div>
    );
  };

  const exclamation = (submit: boolean) => {
    return (
      <div
        className={`card__font-awesome-exclamation ${
          !submit ? 'card__font-awesome-exclamation--main' : ''
        }`}
        onClick={() => (submit ? submitRecommendation('recommended') : null)}
      >
        !
      </div>
    );
  };

  const times = (submit: boolean) => {
    return (
      <div
        className={`card__font-awesome-exclamation ${
          !submit ? 'card__font-awesome-exclamation--main' : ''
        }`}
        onClick={() =>
          submit ? submitRecommendation('not-recommended') : null
        }
      >
        ✘
      </div>
    );
  };

  const pen = (submit: boolean) => {
    return (
      <div
        className={`card__font-awesome-exclamation ${
          !submit ? 'card__font-awesome-exclamation--main' : ''
        }`}
        onClick={() => (submit ? submitRecommendation('own') : null)}
      >
        A
      </div>
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
