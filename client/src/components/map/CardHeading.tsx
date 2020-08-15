import React from 'react';

interface CardHeading {
  title: string;
  updateText: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  handleSubmit: () => void;
  handleFocus: () => void;
  textareaRef: React.MutableRefObject<null>;
}

const CardHeading = ({
  title,
  updateText,
  handleKeyDown,
  handleKeyPress,
  handleSubmit,
  handleFocus,
  textareaRef,
}: CardHeading) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.innerText === 'Edit me!') {
      e.currentTarget.innerText = '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (e.currentTarget.innerText === '') {
      e.currentTarget.innerText = 'Edit me!';
    }
  };
  return (
    <div
      suppressContentEditableWarning={true}
      ref={textareaRef}
      contentEditable
      onInput={(e) => {
        updateText(e.currentTarget.innerText);
      }}
      onKeyDown={(e) => {
        handleKeyDown(e);
      }}
      className='card__inner-text'
      onFocus={() => {
        handleFocus();
      }}
      onBlur={(e) => {
        handleFocus();
        handleSubmit();
        handleBlur(e);
      }}
      onKeyPress={(e) => {
        handleKeyPress(e);
      }}
      onClick={(e) => handleClick(e)}
      defaultValue={title}
    >
      {title}
    </div>
  );
};

export default CardHeading;
