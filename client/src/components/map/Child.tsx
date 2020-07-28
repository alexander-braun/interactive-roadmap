import React from 'react';
import { Category } from '../../roadmap-data/frontend';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/addComment';

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

  const handleAddNewComment = (e: any, id: any) => {
    dispatch(addComment('', id));
  };

  return (
    <div className={`elem ${style(child).join(' ')}`} id={child.id}>
      {!child.mainKnot &&
        child.recommended !== 'none' &&
        child.recommended !== 'not-recommended-none' && (
          <div className='indication-circle'>✓</div>
        )}
      {!props.subchildren && <div className='add-circle'>+</div>}
      {child.mainKnot && <div className='inner-text'>{child.title}</div>}

      {child.mainKnot ? null : (
        <div className='heading'>
          <div className='inner-text'>{child.title}</div>
          <div className='due-date'>26.05.2022</div>
        </div>
      )}

      {child.mainKnot ? null : (
        <div className='comments-row'>
          <div
            className='add-comment-button'
            onClick={(e) => handleAddNewComment(e, child.id)}
          >
            + Add Comment
          </div>
          {child.comments && (
            <ul>
              {child.comments.map((comment) => (
                <li key={uuidv4()}>
                  <textarea
                    defaultValue={comment}
                    rows={2}
                    maxLength={100}
                  ></textarea>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      {child.mainKnot ? null : (
        <div className='bottom-row'>
          <div className='importance'>Importance: 10</div>
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

export default Children;
