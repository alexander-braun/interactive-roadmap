import React, { useState, useRef, memo, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { changeComment } from '../../actions/changeComment';
import { deleteComment } from '../../actions/deleteComment';

interface Comment {
  comment: string;
  id: string;
  index: number;
}

function Comment({ comment, id, index }: Comment): JSX.Element {
  const dispatch = useDispatch();
  const [text, updateText] = useState<string>(comment);
  const [focus, toggleFocus] = useState<boolean>(false);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (): void => {
    if (!text.length) return;
    dispatch(changeComment(text, id, index));
  };

  const handleFocus = (): void => {
    toggleFocus(!focus);
  };

  const handleDelete = (): void => {
    dispatch(deleteComment(id, index));
  };

  const handleInputChange = (e: any): void => {
    e.target.style.height = 0;
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <li>
      <textarea
        onChange={(e) => {
          updateText(e.target.value);
        }}
        rows={2}
        maxLength={100}
        value={text}
        className='comments-textarea'
        onFocus={handleFocus}
        onBlur={(e) => {
          handleFocus();
          handleSubmit();
        }}
        onKeyPress={handleKeyPress}
      ></textarea>
      {/*      <button
        ref={buttonRef}
        className={`comment-action-button ${focus ? 'focus' : ''}`}
        type='submit'
        onClick={handleSubmit}
      >
        Save
      </button>*/}
      <button
        ref={buttonRef}
        className={`comment-action-button ${focus ? 'focus' : ''}`}
        type='submit'
        onClick={handleDelete}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
          <g fill='none' fillRule='evenodd'>
            <path d='M0 0h24v24H0z'></path>
            <rect
              width='14'
              height='1'
              x='5'
              y='6'
              fill='currentColor'
              rx='.5'
            ></rect>
            <path fill='currentColor' d='M10 9h1v8h-1V9zm3 0h1v8h-1V9z'></path>
            <path
              stroke='currentColor'
              d='M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z'
            ></path>
          </g>
        </svg>
      </button>
    </li>
  );
}

export default memo(Comment);
