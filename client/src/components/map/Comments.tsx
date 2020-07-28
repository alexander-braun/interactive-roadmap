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
          {child.comments && (
            <ul>
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
          )}
          <div
            className='add-comment-button'
            onClick={(e) => handleAddNewComment(e, child.id)}
          >
            Add Comment
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Comments);
