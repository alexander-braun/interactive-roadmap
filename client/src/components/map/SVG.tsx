import React, { memo } from 'react';

interface SVG {
  parentRect: DOMRect;
  childRect: DOMRect;
  center?: boolean;
}

function SVG(props: SVG) {
  const scrollHeight = window.pageYOffset;
  const strokeDasharray = !props.center ? '5,15' : '0';
  const strokeWidth = !props.center ? '2.5' : '4';
  const insetSvgBy = 5;

  return (
    <svg
      style={{ position: 'absolute' }}
      className='svgs__single-svg'
      width='100%'
    >
      <line
        x1={
          props.childRect.x > props.parentRect.x && !props.center
            ? props.parentRect.x + props.parentRect.width - insetSvgBy
            : props.center
            ? props.parentRect.x + props.parentRect.width / 2
            : props.parentRect.x + insetSvgBy
        }
        y1={props.parentRect.y + props.parentRect.height / 2 + scrollHeight}
        x2={
          props.childRect.x < props.parentRect.x && !props.center
            ? props.childRect.x + props.childRect.width
            : props.center
            ? props.childRect.x + props.childRect.width / 2
            : props.childRect.x
        }
        y2={props.childRect.y + props.childRect.height / 2 + scrollHeight}
        stroke='#2b78e4'
        strokeDasharray={strokeDasharray}
        strokeLinecap='round'
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

// x2 for left side + props.childRect.width / 2

export default memo(SVG);
