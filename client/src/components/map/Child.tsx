import React, { memo } from 'react';
import { Category } from '../../roadmap-data/frontend';
import { useDispatch } from 'react-redux';
import Comments from './Comments';
import { addChildnode } from '../../actions/addChildnode';
import { ID } from '../../actions/constants';
import { deleteChildnode } from '../../actions/deleteChildnode';

interface Child {
  child: Category;
  subchildren?: boolean;
  center?: boolean;
}

function Children({ child, ...props }: Child): JSX.Element {
  const dispatch = useDispatch();
  const style = (child: Category): string[] => {
    const styles: string[] = [];
    if (child.mainKnot) {
      styles.push('center');
    } else if (!child.mainKnot) {
      styles.push('element');
    }
    if (
      child.recommended === 'not-recommended' ||
      child.recommended === 'not-recommended-none'
    ) {
      styles.push('notRecommended');
    }
    if (child.recommended === 'option') {
      styles.push('option');
    }
    if (child.recommended === 'not-strict') {
      styles.push('not-strict');
    }
    if (child.recommended === 'not-recommended-option') {
      styles.push('not-recommended-option');
    }
    return styles;
  };

  const handleAddChildnode = (): void => {
    dispatch(addChildnode(child.id));
  };

  const handleDeleteChildnode = (): void => {
    dispatch(deleteChildnode(child.id));
  };

  return (
    <div className={`elem ${style(child).join(' ')}`} id={child.id}>
      {!child.mainKnot &&
        child.recommended !== 'none' &&
        child.recommended !== 'not-recommended-none' && (
          <div className='indication-circle'>✓</div>
        )}
      {!props.subchildren && (
        <button
          onClick={handleAddChildnode}
          name='Add Child'
          className='add-circle'
        >
          +
        </button>
      )}
      {!props.center && (
        <button
          name='Remove Child'
          className='delete-circle'
          onClick={handleDeleteChildnode}
        >
          <svg
            id='Layer_1'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <title>remove-delete-circle-glyph</title>
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
      {child.mainKnot && <div className='inner-text'>{child.title}</div>}

      {child.mainKnot ? null : (
        <div className='heading'>
          <div className='inner-text'>{child.title}</div>
          <div className='due-date'>26.05.2022</div>
        </div>
      )}
      <Comments child={child} />
      {child.mainKnot ? null : (
        <div className='bottom-row'>
          <div className='status'>
            {child.finished ? (
              <>
                <div className='green-dot'></div>
                <div className='status-text'>Done</div>
              </>
            ) : (
              <>
                <div className='red-dot'></div>
                <div className='status-text'>Pending</div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(Children);
