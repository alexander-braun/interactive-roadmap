import React, { memo } from 'react';

//Components
import Children from './Children';

//Types
import { Nodes } from '../types/Map-Data';

interface Section {
  sectionId: string;
  nodes: Nodes;
}
type Direction = 'left' | 'right';

function Section({ sectionId, nodes }: Section) {
  if (!nodes[sectionId]) {
    return null;
  }

  const children: string[] = nodes[sectionId].children;

  /**
   * children are the first level of a section
   */
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

  /**
   * subchildren are on the second level of a section
   */
  const generateSubChildren = (direction: Direction): string[] => {
    // Get the appropriate subchildren for the left or right position
    let childrenNew: string[] = [];
    const childrenLength = children.length;
    const middle: number = Math.ceil(childrenLength / 2);
    const l = direction === 'left' ? middle : childrenLength;
    const m = direction === 'left' ? 0 : middle;

    for (let i = m; i < l; i++) {
      if (nodes[children[i]]) {
        const subchildren = nodes[children[i]].children;
        if (subchildren.length) {
          if (direction === 'left') {
            childrenNew = [...childrenNew, ...subchildren];
          } else if (direction === 'right') {
            childrenNew = [...childrenNew, ...subchildren];
          }
        }
      }
    }

    return childrenNew;
  };

  return (
    <div className='section'>
      <Children children={generateSubChildren('left')} subchildren left />
      <Children children={generateChildren('left')} left />
      <Children children={[sectionId]} center={true} />
      <Children
        children={children.length === 1 ? [] : generateChildren('right')}
        right
      />
      <Children children={generateSubChildren('right')} subchildren right />
    </div>
  );
}

export default memo(Section);
