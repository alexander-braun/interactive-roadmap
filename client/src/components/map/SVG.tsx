import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface SVG {
  parentRect: DOMRect;
  childRect: DOMRect;
  key: string;
}

function SVG(props: SVG) {
  return (
    <svg
      style={{ position: 'absolute' }}
      className='svg'
      width='100%'
      key={uuidv4()}
    >
      <line
        x1={props.parentRect.x + props.parentRect.width / 2}
        y1={props.parentRect.y + props.parentRect.height / 2}
        x2={props.childRect.x + props.childRect.width / 2}
        y2={props.childRect.y + props.childRect.height / 2}
        stroke='#2b78e4'
        strokeDasharray='3,10'
        strokeLinecap='round'
        strokeWidth='2'
      />
    </svg>
  );
}

export default SVG;
