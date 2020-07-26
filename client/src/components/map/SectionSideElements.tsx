import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function SectionSideElements(props: any) {
  return (
    <div className='section__side-elements'>
      {props.children.map((child: any) => (
        <div
          key={uuidv4()}
          className='elem'
          data-parent={props.title.split(' ')[0]}
        >
          {child.title}
        </div>
      ))}
    </div>
  );
}

export default SectionSideElements;
