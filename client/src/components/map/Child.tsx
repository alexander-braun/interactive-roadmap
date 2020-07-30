import React, { memo } from 'react';
import { Category } from '../../roadmap-data/frontend';
import { useDispatch } from 'react-redux';
import Comments from './Comments';
import { addChildnode } from '../../actions/addChildnode';
import { deleteChildnode } from '../../actions/deleteChildnode';
import { toggleEditCardModal } from '../../actions/toggleEditCardModal';

interface Child {
  child: Category;
  subchildren?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
}

function Children({ child, ...props }: Child): JSX.Element {
  const dispatch = useDispatch();
  const style = (child: Category): string[] => {
    const styles: string[] = [];
    if (child.mainKnot) {
      styles.push('card--center');
    } else if (!child.mainKnot) {
      styles.push('card--element');
    }
    if (
      child.recommended === 'not-recommended' ||
      child.recommended === 'not-recommended-none'
    ) {
      styles.push('card--not-recommended');
    }
    if (child.recommended === 'option') {
      styles.push('card--option');
    }
    if (child.recommended === 'not-strict') {
      styles.push('card--not-strict');
    }
    if (child.recommended === 'not-recommended-option') {
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
    dispatch(addChildnode(child.id));
  };

  const handleDeleteChildnode = (): void => {
    dispatch(deleteChildnode(child.id));
  };

  const toggleEditModal = () => {
    dispatch(toggleEditCardModal(child.id));
  };

  return (
    <div className={`card ${style(child).join(' ')}`} id={child.id}>
      {!child.mainKnot &&
        child.recommended !== 'none' &&
        child.recommended !== 'not-recommended-none' && (
          <div className='card__indication-circle'>✓</div>
        )}
      {child.mainKnot ? (
        <div className='card__inner-text' onClick={toggleEditModal}>
          {child.title}
        </div>
      ) : (
        <div className='card__heading'>
          <div className='card__inner-text' onClick={toggleEditModal}>
            {child.title}
          </div>
          <div className='card__due-date'>26.05.2022</div>
        </div>
      )}
      <Comments child={child} />
      {child.mainKnot ? null : (
        <div className='card__bottom-row'>
          <div className='card__status' onClick={toggleEditModal}>
            {child.status === 'Done' ? (
              <>
                <div className='card__status--green-dot'></div>
                <div className='card__status--status-text'>Done</div>
              </>
            ) : child.status === 'Pending' ? (
              <>
                <div className='card__status--red-dot'></div>
                <div className='card__status--status-text'>Pending</div>
              </>
            ) : (
              <>
                <div className='card__status--yellow-dot'></div>
                <div className='card__status--status-text'>In Progress</div>
              </>
            )}
          </div>
        </div>
      )}
      <div className='card__button-container'>
        {!props.subchildren && (
          <button
            onClick={handleAddChildnode}
            name='Add Child'
            className='card__add-circle'
          >
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <title>Add New Card As Child</title>
              <path
                d='M256,24C383.9,24,488,128.1,488,256S383.9,488,256,488,24.06,383.9,24.06,256,128.1,24,256,24ZM0,256C0,397.16,114.84,512,256,512S512,397.16,512,256,397.16,0,256,0,0,114.84,0,256Z'
                fill='#5b5b5f'
              />
              <polygon
                points='382 172.72 339.29 130.01 256 213.29 172.72 130.01 130.01 172.72 213.29 256 130.01 339.28 172.72 382 256 298.71 339.29 381.99 382 339.28 298.71 256 382 172.72'
                fill='#5b5b5f'
              />
            </svg>
          </button>
        )}
        {!props.center && (
          <button
            name='Remove Child'
            className='card__delete-circle'
            onClick={handleDeleteChildnode}
          >
            <svg
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <title>Delete This Card</title>
              <path
                d='M256,24C383.9,24,488,128.1,488,256S383.9,488,256,488,24.06,383.9,24.06,256,128.1,24,256,24ZM0,256C0,397.16,114.84,512,256,512S512,397.16,512,256,397.16,0,256,0,0,114.84,0,256Z'
                fill='#5b5b5f'
              />
              <polygon
                points='382 172.72 339.29 130.01 256 213.29 172.72 130.01 130.01 172.72 213.29 256 130.01 339.28 172.72 382 256 298.71 339.29 381.99 382 339.28 298.71 256 382 172.72'
                fill='#5b5b5f'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default memo(Children);
