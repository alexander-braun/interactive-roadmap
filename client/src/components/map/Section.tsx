import React, { memo } from 'react';
import { Map } from '../types/Map';
import Children from './Children';

interface Section {
  sections: [Map, Map[]];
  index: number;
}

type Direction = 'left' | 'right';

function Section({ sections, index }: Section) {
  const section: Map = sections[0];
  const children: Map[] = sections[1];

  const generateChildren = (direction: Direction): Map | Map[] => {
    if (!children) return [];
    if (children.length === 1) {
      return children;
    }
    const middle: number = Math.ceil(children.length / 2);
    if (direction === 'left') {
      return children.slice(0, middle);
    } else return children.slice(middle);
  };

  const generateSubChildren = (direction: Direction): Map | Map[] => {
    // Get the appropriate subchildren for the left or right position
    const subChildrenLeft = [];
    const subChildrenRight = [];
    for (let i = 0; i < children.length; i++) {
      const subchildren = children[i].children;
      if (subchildren.length) {
        for (let j = 0; j < subchildren.length; j++) {
          if (i < Math.ceil(children.length / 2)) {
            subChildrenLeft.push(subchildren[j]);
          } else {
            subChildrenRight.push(subchildren[j]);
          }
        }
      }
    }

    if (direction === 'left' && subChildrenLeft.length) {
      return subChildrenLeft;
    } else if (direction === 'right' && subChildrenRight.length) {
      return subChildrenRight;
    } else return [];
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
