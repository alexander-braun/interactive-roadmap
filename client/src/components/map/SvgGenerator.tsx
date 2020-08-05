import React, { memo, useEffect, useState, useCallback } from 'react';
import Svg from './SVG';
import { v4 as uuidv4 } from 'uuid';
import ResizeObserver from 'react-resize-observer';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { Nodes } from '../types/Map-Data';

interface SvgGenerator {
  data: Nodes;
}

export type IDs = [string, string][];

function SvgGenerator({ data }: SvgGenerator) {
  const generateSvgParentsAndChildrenIds = useCallback((): IDs => {
    const pairs: IDs = [];
    const nodeIds = Object.keys(data);
    const mainKnots: string[] = [];

    for (const id of nodeIds) {
      const children = data[id].children;
      for (const child of children) {
        pairs.push([id, child]);
      }
    }

    for (const id of nodeIds) {
      if (data[id].mainKnot) {
        mainKnots.push(id);
      }
    }

    for (let i = 0; i < mainKnots.length; i++) {
      pairs.push([mainKnots[i], mainKnots[i + 1]]);
    }

    return pairs;
  }, [data]);

  const generateSvg = (ids: [string, string][]): JSX.Element[] => {
    const svgCollection = [];
    for (const id of ids) {
      const parent = document.getElementById(id[0]);
      const child = document.getElementById(id[1]);
      if (!parent || !child) continue;
      const parentRect = parent.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      svgCollection.push(
        <Svg
          key={uuidv4()}
          center={
            parent.classList.contains('card--center') &&
            child.classList.contains('card--center')
          }
          parentRect={parentRect}
          childRect={childRect}
        />
      );
    }
    return svgCollection;
  };

  useEffect(() => {
    setSvgs(generateSvg(generateSvgParentsAndChildrenIds()));
  }, [generateSvgParentsAndChildrenIds, data]);

  const [svgs, setSvgs] = useState<any>([]);

  return (
    <div className='svgs'>
      <ResizeObserver
        onResize={(rect) => {
          setSvgs(generateSvg(generateSvgParentsAndChildrenIds()));
        }}
      />
      <svg
        style={{
          position: 'absolute',
          width: '100%',
        }}
        className='svgs__single-svg'
      >
        {svgs}
      </svg>
    </div>
  );
}

interface StateProps {
  data: Nodes;
}

const mapStateToProps = (state: AppState): StateProps => ({
  data: state.data,
});

export default memo(connect(mapStateToProps)(SvgGenerator));
