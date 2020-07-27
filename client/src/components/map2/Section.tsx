import React from 'react';
import { Category } from '../../roadmap-data/frontend';
import Center from './Center';
import Children from './Children';

interface Section {
  sections: [Category, Category[], Category[]];
}

type Direction = 'left' | 'right';

function Section({ sections }: Section) {
  const section: Category = sections[0];
  const children: Category[] = sections[1];
  const subchildren: Category[] = sections[2];

  const generateChildren = (direction: Direction): Category | Category[] => {
    if (!children) return [];
    if (children.length === 1) return children;
    const middle: number = Math.floor(children.length / 2);
    if (direction === 'left') {
      return children.slice(0, middle);
    } else return children.slice(middle);
  };

  const generateSubChildren = (direction: Direction): Category | Category[] => {
    if (!subchildren) return [];
    if (subchildren.length === 1) return subchildren;
    const middle: number = Math.floor(subchildren.length / 2);
    if (direction === 'left') {
      return subchildren.slice(0, middle);
    } else return subchildren.slice(middle);
  };

  const childrenLeft: Category[] | Category = generateChildren('left');
  const childrenRight: Category[] | Category = generateChildren('right');
  const subChildrenLeft: Category[] | Category = generateSubChildren('left');
  const subChildrenRight: Category[] | Category = generateSubChildren('right');

  return (
    <div className='section'>
      <Children children={subChildrenLeft} />
      <Children children={childrenLeft} />
      <Center category={section} />
      <Children children={childrenRight} />
      <Children children={subChildrenRight} />
    </div>
  );
}

export default Section;
