import React from 'react';
import { frontend } from '../../roadmap-data/frontend';
import SectionCategory from './SectionCategory';
import SectionSideElements from './SectionSideElements';

interface Section {
  category: typeof frontend[0];
}

function Section(props: Section) {
  const generateChildrenLeft = () => {
    const middle = Math.floor(props.category.children.length / 2);
    return props.category.children.slice(0, middle);
  };

  const generateChildrenRight = () => {
    const middle = Math.floor(props.category.children.length / 2);
    return props.category.children.slice(middle);
  };

  return (
    <div className='section'>
      <SectionSideElements
        children={generateChildrenLeft()}
        title={props.category.title}
      />
      <SectionCategory
        centerPieceTitle={props.category.title}
        centerPieceType={props.category.type}
      />
      <SectionSideElements
        children={generateChildrenRight()}
        title={props.category.title}
      />
    </div>
  );
}

export default Section;
