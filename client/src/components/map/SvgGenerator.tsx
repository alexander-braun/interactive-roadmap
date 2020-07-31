import React, { memo } from 'react';
import { IDs } from './Index';
import Svg from './SVG';
import { v4 as uuidv4 } from 'uuid';

interface SvgGenerator {
  ids: IDs;
  width: number | undefined;
}

function SvgGenerator({ ids, ...props }: SvgGenerator) {
  const generateSvg = (id: [string, string]): JSX.Element | null => {
    const parent = document.getElementById(id[0])!;
    const child = document.getElementById(id[1])!;
    if (!parent || !child) return null;
    else {
      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      if (
        parent.classList.contains('card--center') &&
        child.classList.contains('card--center')
      ) {
        return (
          <Svg
            key={uuidv4()}
            center
            parentRect={parentRect}
            childRect={childRect}
          />
        );
      } else
        return (
          <Svg key={uuidv4()} parentRect={parentRect} childRect={childRect} />
        );
    }
  };

  return (
    <div className='svgs'>
      <svg
        style={{
          position: 'absolute',
          width: '100%',
        }}
        className='svgs__single-svg'
      >
        {ids.map((id) => {
          return generateSvg(id);
        })}
      </svg>
    </div>
  );
}

export default memo(SvgGenerator);
