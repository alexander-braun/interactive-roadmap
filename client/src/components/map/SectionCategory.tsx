import React from 'react';

interface SectionCategory {
  centerPieceTitle: string;
  centerPieceType: string;
}

function SectionCategory(props: SectionCategory) {
  return (
    <div className='section__category'>
      <div
        className='section__category--title elem'
        data-children={props.centerPieceTitle.split(' ')[0]}
      >
        {props.centerPieceTitle}
      </div>
    </div>
  );
}

export default SectionCategory;
