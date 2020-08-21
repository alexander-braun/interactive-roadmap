import React, { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//Actions
import { addComment, ID, Comments as CommentsState } from '../../actions';

//Components
import Comment from './Comment';

//Default data
import { Nodes } from '../types/Map-Data';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

//Global state
import { AppState } from '../../reducers';

interface Comments {
  child: string;
  nodes: Nodes;
  comments: CommentsState;
}

function Comments({ child, nodes, comments }: Comments): JSX.Element {
  const dispatch = useDispatch();

  const handleAddNewComment = (id: ID): void => {
    dispatch(addComment('', id));
  };

  return (
    <>
      {nodes[child] && !nodes[child].mainKnot && (
        <div className='comments-row'>
          {comments[child] ? (
            <ul className='comments-row__list'>
              {comments[child].map((comment, index) => {
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

interface StateProps {
  comments: CommentsState;
  nodes: Nodes;
}

const mapStateToProps = (state: AppState): StateProps => ({
  comments: state.comments,
  nodes: state.nodes,
});

export default memo(connect(mapStateToProps)(Comments));
