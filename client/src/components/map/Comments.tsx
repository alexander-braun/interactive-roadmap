import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/addComment';
import Comment from './Comment';
import { ID } from '../../actions/constants';
import { Nodes } from '../types/Map-Data';

interface Comments {
  child: string;
  data: Nodes;
}

function Comments({ child, data }: Comments): JSX.Element {
  const dispatch = useDispatch();

  const handleAddNewComment = (id: ID): void => {
    dispatch(addComment('', id));
  };

  return (
    <>
      {!data[child].mainKnot && (
        <div className='comments-row'>
          {data[child].comments ? (
            <ul className='comments-row__list'>
              {data[child].comments.map((comment, index) => {
                return (
                  <Comment
                    key={uuidv4()}
                    comment={comment}
                    index={index}
                    id={child}
                  />
                );
              })}
            </ul>
          ) : null}
          <button
            className='comments-row__add-comment-button'
            onClick={() => handleAddNewComment(child)}
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
