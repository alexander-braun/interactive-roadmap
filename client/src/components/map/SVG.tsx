import React from 'react';

function SVG(props: any) {
  return (
    <svg style={{ position: 'absolute' }} className='svg' width='100%'>
      <line
        x1={props.parentRect.x + props.parentRect.width / 2}
        y1={props.parentRect.y + props.parentRect.height / 2}
        x2={props.childRect.x + props.childRect.width / 2}
        y2={props.childRect.y + props.childRect.height / 2}
        stroke='black'
        strokeDasharray='5,5'
        strokeLinecap='round'
        strokeWidth='2'
      />
    </svg>
  );
}

export default SVG;
