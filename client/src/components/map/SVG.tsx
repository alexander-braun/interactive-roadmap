import React, { memo } from 'react';

interface SVG {
  parentRect: DOMRect;
  childRect: DOMRect;
  center?: boolean;
}

function SVG(props: SVG): JSX.Element | null {
  const scrollHeight = window.pageYOffset;
  const strokeDasharray = !props.center ? '5,12' : '0';
  const strokeWidth = !props.center ? '2.5' : '4';
  const insetSvgBy = 5;

  const moveToX =
    props.childRect.x > props.parentRect.x && !props.center
      ? props.parentRect.x + props.parentRect.width - insetSvgBy - 20
      : props.center
      ? props.parentRect.x + props.parentRect.width / 2
      : props.parentRect.x + insetSvgBy + 20;

  const moveToY =
    props.parentRect.y + props.parentRect.height / 2 + scrollHeight;

  const curveX =
    props.childRect.x < props.parentRect.x && !props.center
      ? props.childRect.x + props.childRect.width
      : props.center
      ? props.childRect.x + props.childRect.width / 2
      : props.childRect.x;

  const curveY = props.childRect.y + props.childRect.height / 2 + scrollHeight;

  const curveX1 =
    props.childRect.x > props.parentRect.x && !props.center
      ? moveToX + 20
      : props.center
      ? moveToX
      : moveToX - 20;

  const curveX2 =
    props.childRect.x > props.parentRect.x && !props.center
      ? moveToX + 50
      : props.center
      ? moveToX
      : moveToX - 50;

  const curveY1 = moveToY;
  const curveY2 = moveToY;

  return (
    <>
      <path
        d={`M ${moveToX} ${moveToY} C ${curveX1} ${curveY1}, ${curveX2} ${curveY2}, ${curveX} ${curveY}`}
        stroke='#2b78e4'
        fill='transparent'
        strokeDasharray={strokeDasharray}
        strokeLinecap='round'
        strokeWidth={strokeWidth}
      />
    </>
  );
}

// x2 for left side + props.childRect.width / 2

export default memo(SVG);
