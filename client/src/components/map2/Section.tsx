import React from 'react';
import { Category } from '../../roadmap-data/frontend';
import Children from './Children';

interface Section {
  sections: [Category, Category[], Category[]];
}

type Direction = 'left' | 'right';

type ChildT = Category[] | Category;

function Section({ sections }: Section) {
  const section: Category = sections[0];
  const children: Category[] = sections[1];
  const subchildren: Category[] = sections[2];

  const generateChildren = (direction: Direction): Category | Category[] => {
    if (!children) return [];
    if (children.length === 1) {
      return children;
    }
    const middle: number = Math.floor(children.length / 2);
    if (direction === 'left') {
      return children.slice(0, middle);
    } else return children.slice(middle);
  };

  const generateSubChildren = (direction: Direction): Category | Category[] => {
    if (!subchildren) return [];
    if (subchildren.length === 1) {
      return subchildren;
    }
    const middle: number = Math.floor(subchildren.length / 2);
    if (direction === 'left') {
      return subchildren.slice(0, middle);
    } else return subchildren.slice(middle);
  };

  return (
    <div className='section'>
      <Children children={generateSubChildren('left')} subchildren />
      <Children children={generateChildren('left')} />
      <Children children={section} center />
      <Children
        children={children.length === 1 ? [] : generateChildren('right')}
      />
      <Children
        children={children.length === 1 ? [] : generateSubChildren('right')}
        subchildren
      />
    </div>
  );
}

export default Section;
