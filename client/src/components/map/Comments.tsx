import React, { memo } from 'react';
import { Category } from '../../roadmap-data/frontend';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/addComment';
import Comment from './Comment';

interface Comments {
  child: Category;
}

function Comments({ child }: Comments): JSX.Element {
  const dispatch = useDispatch();

  const handleAddNewComment = (e: any, id: any): void => {
    dispatch(addComment('', id));
  };

  return (
    <>
      {child.mainKnot ? null : (
        <div className='comments-row'>
          {child.comments.length ? (
            <ul className='comments-row__list'>
              {child.comments.map((comment, index) => {
                return (
                  <Comment
                    key={uuidv4()}
                    comment={comment}
                    index={index}
                    id={child.id}
                  />
                );
              })}
            </ul>
          ) : null}
          <button
            className='comments-row__add-comment-button'
            onClick={(e) => handleAddNewComment(e, child.id)}
          >
            <div className='comments-row__add-comment-svg'>
              <svg width='13' height='13'>
                <path
                  d='M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z'
                  fill='black'
                  fillRule='evenodd'
                ></path>
              </svg>
            </div>
            <div className='comments-row__add-comment-text'>Add Comment</div>
          </button>
        </div>
      )}
    </>
  );
}

export default memo(Comments);
