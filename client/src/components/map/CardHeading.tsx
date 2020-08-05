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
      onBlur={() => {
        handleFocus();
        handleSubmit();
      }}
      onKeyPress={(e) => {
        handleKeyPress(e);
      }}
      defaultValue={title}
    >
      {title}
    </div>
  );
};

export default CardHeading;
