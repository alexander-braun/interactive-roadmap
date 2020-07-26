import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../../roadmap-data/frontend';

interface SectionSideElements {
  children: Category[];
  title: string;
}

function SectionSideElements(props: SectionSideElements) {
  return (
    <div className='section__side-elements'>
      {props.children.map((child) => {
        return (
          <div
            key={uuidv4()}
            className='elem'
            data-parent={props.title.split(' ')[0]}
            data-children={child.children.length && child.title.split(' ')[0]}
          >
            {child.title}
          </div>
        );
      })}
    </div>
  );
}

export default SectionSideElements;
