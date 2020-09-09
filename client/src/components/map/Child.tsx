import React, { memo, useRef, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//Components
import Comments from './Comments';
import CardHeading from './CardHeading';
import Statusrow from './Statusrow';
import RecommendationBubbles from './RecommendationBubbles';

//Actions
import {
  addChildnode,
  deleteChildnode,
  setCardHeading,
  setStatus,
  toggleCalendarModal,
  Statuses,
  Dates,
  Headings,
  Recommendations,
} from '../../actions';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

//Global State
import { AppState } from '../../reducers';

interface Child {
  child: string;
  subchildren?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  status: Statuses;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
}

function Child({
  child,
  status,
  goalDates,
  headings,
  recommendations,
  ...props
}: Child): JSX.Element {
  const dispatch = useDispatch();

  const [text, updateHeading] = useState<string>(
    headings[child] && headings[child].trim()
  );

  /**
   * In case of a newly created card without heading.
   */
  useEffect(() => {
    if (headings[child] === undefined) {
      dispatch(setCardHeading(child, 'Edit me!'));
    }
  });

  const textareaRef = useRef(null);

  const handleAddChildnode = (): void => {
    dispatch(addChildnode(child));
  };

  const handleDeleteChildnode = (): void => {
    dispatch(deleteChildnode(child));
  };

  /**
   * Card Heading Change (if heading actually changed)
   */
  const handleSubmit = useCallback((): void => {
    if (headings[child] === text && text) return;
    else dispatch(setCardHeading(child, text));
  }, [headings, child, dispatch, text]);

  const handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const el = document.activeElement as HTMLDivElement;
      el.blur();
      return handleSubmit();
    }
  };

  const handleStatusUpdate = (status: string) => {
    if (status === 'Pending' || status === 'In-Work' || status === 'Done') {
      dispatch(setStatus(status, child));
    }
  };

  /**
   * Check if the heading is too long but leave the option
   * to remove characters.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (
      e.currentTarget.innerHTML.length > 60 &&
      e.key !== 'Backspace' &&
      e.key !== 'Enter'
    ) {
      e.preventDefault();
      return;
    }
  };

  const convertDate = (milliseconds: number) => {
    const date = new Date(milliseconds).toString().split(' ');
    const month =
      'JanFebMarAprMayJunJulAugSepOctNovDec'.indexOf(date[1]) / 3 + 1;
    const day = date[2];
    const year = date[3];
    return `${day}.${month}.${year}`;
  };

  /**
   * Children can have different statuses -> different bg colors.
   * Children can also be center / standard cards.
   * According to the passed props the style of a child is changed.
   */
  const style = () => {
    const styles: string[] = [];
    if (props.center) {
      styles.push('card--center');
    } else {
      styles.push('card--element');
    }
    const recommended = recommendations[child];
    if (recommended === 'not-recommended') {
      styles.push('card--not-recommended');
    }
    if (recommended === 'recommended') {
      styles.push('card--recommended');
    }
    if (recommended === 'option') {
      styles.push('card--option');
    }
    if (recommended === undefined || recommended === 'own') {
      styles.push('card--own-edit');
    }
    if (props.subchildren) {
      styles.push('card--subchild');
    }
    if (props.left) {
      styles.push('card--left');
    } else if (props.right) {
      styles.push('card--right');
    }
    return styles;
  };

  const openCalender = () => {
    dispatch(toggleCalendarModal([child, goalDates[child], true]));
  };

  return (
    <div className={`card ${style().join(' ')}`} id={child}>
      {!props.center && (
        <RecommendationBubbles
          id={child}
          recommendation={recommendations[child]}
        />
      )}
      <div className='card__heading'>
        <CardHeading
          title={headings[child] || 'Edit me!'}
          updateHeading={updateHeading}
          handleKeyDown={handleKeyDown}
          handleKeyPress={handleKeyPress}
          handleSubmit={handleSubmit}
          textareaRef={textareaRef}
        />
        {!props.center && (
          <time
            onClick={() => {
              openCalender();
            }}
            className='card__due-date'
          >
            {convertDate(goalDates[child] || Date.now())}
          </time>
        )}
      </div>
      <Comments child={child} />
      {!props.center && (
        <Statusrow
          handleStatusUpdate={handleStatusUpdate}
          status={status[child] || 'Pending'}
        />
      )}
      <div className='card__button-container'>
        {!props.subchildren && (
          <FontAwesomeIcon
            onClick={handleAddChildnode}
            name='Add Child'
            className='card__font-awesome-add-delete'
            title='Add New Card As Child'
            icon={faPlusCircle}
          />
        )}
        <FontAwesomeIcon
          name='Remove Child'
          className='card__font-awesome-add-delete'
          title='Delete This Card'
          icon={faTimesCircle}
          onClick={handleDeleteChildnode}
        />
      </div>
    </div>
  );
}

interface StateProps {
  status: Statuses;
  goalDates: Dates;
  headings: Headings;
  recommendations: Recommendations;
}

const mapStateToProps = (state: AppState): StateProps => ({
  status: state.status,
  goalDates: state.goalDates,
  headings: state.headings,
  recommendations: state.recommendations,
});

export default memo(connect(mapStateToProps)(Child));
