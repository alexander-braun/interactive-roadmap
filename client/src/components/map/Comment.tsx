import React, { useState, useRef, memo } from 'react';
import { useDispatch } from 'react-redux';
import { changeComment } from '../../actions/changeComment';

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

  return (
    <li>
      <textarea
        onChange={(e) => updateText(e.target.value)}
        rows={2}
        maxLength={100}
        value={text}
        className='comments-textarea'
        onFocus={handleFocus}
        onBlur={handleFocus}
      ></textarea>
      <button
        ref={buttonRef}
        className={`save-comment-button ${focus ? 'focus' : ''}`}
        type='submit'
        onClick={handleSubmit}
      >
        Save
      </button>
    </li>
  );
}

export default memo(Comment);
