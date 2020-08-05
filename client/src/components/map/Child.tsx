import React, { memo, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Comments from './Comments';
import { addChildnode } from '../../actions/addChildnode';
import { deleteChildnode } from '../../actions/deleteChildnode';
import { setCardHeading } from '../../actions/setCardHeading';
import { setStatus } from '../../actions/setStatus';
import AddDeleteSvg from './AddDeleteSvg';
import CardHeading from './CardHeading';
import Statusrow from './Statusrow';
import { toggleCalendarModal } from '../../actions/toggleCalendarModal';
import { Nodes } from '../types/Map-Data';

interface Child {
  child: string;
  subchildren?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  data: Nodes;
}

function Children({ child, data, ...props }: Child): JSX.Element {
  const dispatch = useDispatch();

  const style = (child: string): string[] => {
    const styles: string[] = [];
    if (data[child].mainKnot) {
      styles.push('card--center');
    } else if (!data[child].mainKnot) {
      styles.push('card--element');
    }
    if (
      data[child].recommended === 'not-recommended' ||
      data[child].recommended === 'not-recommended-none'
    ) {
      styles.push('card--not-recommended');
    }
    if (data[child].recommended === 'option') {
      styles.push('card--option');
    }
    if (data[child].recommended === 'not-strict') {
      styles.push('card--not-strict');
    }
    if (data[child].recommended === 'not-recommended-option') {
      styles.push('card--not-recommended-option');
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

  const handleAddChildnode = (): void => {
    dispatch(addChildnode(child));
  };

  const handleDeleteChildnode = (): void => {
    dispatch(deleteChildnode(child));
  };

  const textareaRef = useRef(null);
  const [text, updateText] = useState<string>(data[child].title.trim());
  const [focus, toggleFocus] = useState<boolean>(false);

  const handleFocus = (): void => {
    toggleFocus(!focus);
  };

  const handleSubmit = (): void => {
    if (!text.length || data[child].title === text) return;
    dispatch(setCardHeading(child, text));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleStatusUpdate = (status: string) => {
    if (status === 'Pending' || status === 'In-Work' || status === 'Done') {
      dispatch(setStatus(status, child));
    }
  };

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
    const month = date[1];
    const day = date[2];
    const year = date[3];
    return `${day} ${month} ${year}`;
  };

  return (
    <div className={`card ${style(child).join(' ')}`} id={child}>
      {!data[child].mainKnot &&
        data[child].recommended !== 'none' &&
        data[child].recommended !== 'not-recommended-none' && (
          <div className='card__indication-circle'>✓</div>
        )}
      {data[child].mainKnot ? (
        <CardHeading
          title={data[child].title}
          updateText={updateText}
          handleKeyDown={handleKeyDown}
          handleKeyPress={handleKeyPress}
          handleSubmit={handleSubmit}
          handleFocus={handleFocus}
          textareaRef={textareaRef}
        />
      ) : (
        <div className='card__heading'>
          <CardHeading
            title={data[child].title}
            updateText={updateText}
            handleKeyDown={handleKeyDown}
            handleKeyPress={handleKeyPress}
            handleSubmit={handleSubmit}
            handleFocus={handleFocus}
            textareaRef={textareaRef}
          />
          <div
            onClick={() => {
              dispatch(
                toggleCalendarModal([child, data[child].goalDate, true])
              );
            }}
            className='card__due-date'
          >
            {convertDate(data[child].goalDate)}
          </div>
        </div>
      )}
      <Comments child={child} data={data} />

      {!data[child].mainKnot && (
        <Statusrow
          handleStatusUpdate={handleStatusUpdate}
          status={data[child].status}
        />
      )}
      <div className='card__button-container'>
        {!props.subchildren && (
          <button
            onClick={handleAddChildnode}
            name='Add Child'
            className='card__add-circle'
          >
            <AddDeleteSvg title='Add New Card As Child' />
          </button>
        )}
        {!props.center && (
          <button
            name='Remove Child'
            className='card__delete-circle'
            onClick={handleDeleteChildnode}
          >
            <AddDeleteSvg title='Delete This Card' />
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(Children);
