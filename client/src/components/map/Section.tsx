import React, { memo } from 'react';
import Children from './Children';
import { Nodes } from '../types/Map-Data';

interface Section {
  sectionId: string;
  data: Nodes;
  index: number;
}

type Direction = 'left' | 'right';

function Section({ sectionId, data, index }: Section) {
  if (!data[sectionId]) {
    return null;
  }
  const children: string[] = data[sectionId].children;

  const generateChildren = (direction: Direction): string[] => {
    if (!children) return [];
    if (children.length === 1) {
      return children;
    }
    const middle: number = Math.ceil(children.length / 2);
    if (direction === 'left') {
      return children.slice(0, middle);
    } else return children.slice(middle);
  };

  const generateSubChildren = (direction: Direction): string[] => {
    // Get the appropriate subchildren for the left or right position
    let childrenNew: string[] = [];
    const middle: number = Math.ceil(children.length / 2);
    for (let i = 0; i < children.length; i++) {
      const subchildren = data[children[i]].children;
      if (subchildren.length) {
        if (direction === 'left' && i < middle) {
          childrenNew = [...childrenNew, ...subchildren];
        } else if (direction === 'right' && i >= middle) {
          childrenNew = [...childrenNew, ...subchildren];
        }
      }
    }

    return childrenNew;
  };

  return (
    <div className='section'>
      <Children
        children={generateSubChildren('left')}
        subchildren
        left
        data={data}
      />
      <Children children={generateChildren('left')} left data={data} />
      <Children children={[sectionId]} center={true} data={data} />
      <Children
        children={children.length === 1 ? [] : generateChildren('right')}
        right
        data={data}
      />
      <Children
        children={generateSubChildren('right')}
        subchildren
        right
        data={data}
      />
    </div>
  );
}

export default memo(Section);
