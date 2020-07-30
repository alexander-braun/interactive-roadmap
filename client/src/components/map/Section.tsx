import React, { memo } from 'react';
import { Category } from '../../roadmap-data/frontend';
import Children from './Children';

interface Section {
  sections: [Category, Category[], Category[]];
  index: number;
}

type Direction = 'left' | 'right';

function Section({ sections, index }: Section) {
  const section: Category = sections[0];
  const children: Category[] = sections[1];
  const subchildren: Category[] = sections[2];

  const generateChildren = (direction: Direction): Category | Category[] => {
    if (!children) return [];
    if (children.length === 1) {
      return children;
    }
    const middle: number = Math.ceil(children.length / 2);
    if (direction === 'left') {
      return children.slice(0, middle);
    } else return children.slice(middle);
  };

  const generateSubChildren = (direction: Direction): Category | Category[] => {
    // Get the appropriate subchildren for the left or right position
    const subChildrenLeft = [];
    const subChildrenRight = [];
    for (let i = 0; i < children.length; i++) {
      const subs = children[i].children;
      if (subs.length) {
        for (let j = 0; j < subs.length; j++) {
          if (i < Math.ceil(children.length / 2)) {
            subChildrenLeft.push(subs[j].id);
          } else {
            subChildrenRight.push(subs[j].id);
          }
        }
      }
    }

    if (!subchildren) return [];

    if (subchildren.length === 1) {
      if (
        direction === 'left' &&
        subChildrenLeft.indexOf(subchildren[0].id) >= 0
      ) {
        return subchildren;
      } else if (
        direction === 'right' &&
        subChildrenRight.indexOf(subchildren[0].id) >= 0
      ) {
        return subchildren;
      }
    }

    if (direction === 'left') {
      const childrenLeft = [];
      for (let i = 0; i < subchildren.length; i++) {
        if (subChildrenLeft.indexOf(subchildren[i].id) >= 0) {
          childrenLeft.push(subchildren[i]);
        }
      }
      return childrenLeft;
    } else {
      const childrenRight = [];
      for (let i = 0; i < subchildren.length; i++) {
        if (subChildrenRight.indexOf(subchildren[i].id) >= 0) {
          childrenRight.push(subchildren[i]);
        }
      }
      return childrenRight;
    }
  };

  return (
    <div className='section'>
      <Children children={generateSubChildren('left')} subchildren left />
      <Children children={generateChildren('left')} left />
      <Children children={section} center={true} />
      <Children
        children={children.length === 1 ? [] : generateChildren('right')}
        right
      />
      <Children children={generateSubChildren('right')} subchildren right />
    </div>
  );
}

export default memo(Section);
