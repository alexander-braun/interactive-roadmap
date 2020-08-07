import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addComment } from '../../actions/addComment';
import Comment from './Comment';
import { ID } from '../../actions/constants';
import { Nodes } from '../types/Map-Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon
              className='comments-row__font-awesome-plus'
              icon={faPlus}
            />
            <div className='comments-row__add-comment-text'>Add Comment</div>
          </button>
        </div>
      )}
    </>
  );
}

export default memo(Comments);
