import React from 'react';
import { useDispatch } from 'react-redux';

//Actions
import { changeRecommendation, Recommendation } from '../../actions';

/**
 * Recommendation system wich is visible on the top right corner of a card
 * as a selectible bubble
 */

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

  /**
   * Checkmark Recommendation: "Good Alternative"
   */
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

  /**
   * Exclamation mark recommendation: "Recommended option"
   */
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

  /**
   * X-Recommendation mark: "Not recommended"
   */
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

  /**
   * A-Recommendation mark: "Assign yourself"
   */
  const assign = (submit: boolean) => {
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
          : assign(false)}
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
          {assign(true)}
        </div>
      </div>
    </>
  );
};
export default RecommendationBubbles;
