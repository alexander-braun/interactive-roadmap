import React, { memo, useEffect, useState, useCallback } from 'react';
import { IDs } from './Index';
import Svg from './SVG';
import { v4 as uuidv4 } from 'uuid';
import { Map } from '../types/Map';
import ResizeObserver from 'react-resize-observer';

interface SvgGenerator {
  data: Map[];
}

function SvgGenerator({ data }: SvgGenerator) {
  const generateSvgParentsAndChildrenIds = useCallback((): IDs => {
    const pairs: IDs = [];
    let currentCategoryId = '';
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const parentId = node.id;
      if (currentCategoryId.length) {
        pairs.push([currentCategoryId, parentId]);
      }
      currentCategoryId = parentId;
      for (const child of node.children) {
        const childId = child.id;
        pairs.push([parentId, childId]);
        if (child.children) {
          for (const subchild of child.children) {
            pairs.push([childId, subchild.id]);
          }
        }
      }
    }
    return pairs;
  }, [data]);

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

  const [ids, setSvgs] = useState<IDs>([]);

  useEffect(() => {
    setTimeout(() => {
      setSvgs(generateSvgParentsAndChildrenIds());
    });
  }, [generateSvgParentsAndChildrenIds, data]);

  return (
    <div className='svgs'>
      <ResizeObserver
        onResize={(rect) => {
          setSvgs(generateSvgParentsAndChildrenIds());
        }}
      />
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
