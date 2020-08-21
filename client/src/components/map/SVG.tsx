import React, { memo } from 'react';

interface SVG {
  parentRect: DOMRect;
  childRect: DOMRect;
  center?: boolean;
  scrollHeight: number;
}
/**
 * Component calculates the right curvature for the svg lines
 * based on their position and depending on if they are a
 * mainKnot (centernode)
 */
function SVG(props: SVG): JSX.Element | null {
  const insetSvgBy = 5;

  const moveToX =
    props.childRect.x > props.parentRect.x && !props.center
      ? props.parentRect.x + props.parentRect.width - insetSvgBy - 20
      : props.center
      ? props.parentRect.x + props.parentRect.width / 2
      : props.parentRect.x + insetSvgBy + 20;

  const moveToY = props.center
    ? props.parentRect.y + props.parentRect.height + props.scrollHeight
    : props.parentRect.y + props.parentRect.height / 2 + props.scrollHeight;

  const curveX =
    props.childRect.x < props.parentRect.x && !props.center
      ? props.childRect.x + props.childRect.width
      : props.center
      ? props.childRect.x + props.childRect.width / 2
      : props.childRect.x;

  const curveY = props.center
    ? props.childRect.y + props.scrollHeight
    : props.childRect.y + props.childRect.height / 2 + props.scrollHeight;

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
        className={props.center ? 'svg-center' : 'svg-dash'}
      />
    </>
  );
}

export default memo(SVG);
