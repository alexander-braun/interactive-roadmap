import React from 'react';

interface CardHeading {
  title: string;
  updateHeading: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  handleSubmit: () => void;
  textareaRef: React.MutableRefObject<null>;
}

const CardHeading = ({
  title,
  updateHeading,
  handleKeyDown,
  handleKeyPress,
  handleSubmit,
  textareaRef,
}: CardHeading) => {
  /**
   * If the default text is still the current cardheading
   * delete it...
   */
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.innerText === 'Edit me!') {
      e.currentTarget.innerText = '';
    }
  };

  /**
   * ...and change it back on blur.
   */
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
        updateHeading(e.currentTarget.innerText);
      }}
      onKeyDown={(e) => {
        handleKeyDown(e);
      }}
      className='card__inner-text'
      onBlur={(e) => {
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
