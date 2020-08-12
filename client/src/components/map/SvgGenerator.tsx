import React, { memo, useEffect, useState, useCallback } from 'react';
import Svg from './SVG';
import { v4 as uuidv4 } from 'uuid';
import ResizeObserver from 'react-resize-observer';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { Nodes } from '../types/Map-Data';
import { useDispatch } from 'react-redux';
import { addCenternode } from '../../actions/addCenternode';

interface SvgGenerator {
  nodes: Nodes;
}

export type IDs = [string, string][];

function SvgGenerator({ nodes }: SvgGenerator) {
  const dispatch = useDispatch();
  const generateSvgParentsAndChildrenIds = useCallback((): IDs => {
    const pairs: IDs = [];
    const nodeIds = Object.keys(nodes);
    const mainKnots: string[] = [];

    for (const id of nodeIds) {
      if (nodes[id].mainKnot) {
        mainKnots.push(id);
      }

      const children = nodes[id].children;
      for (const child of children) {
        pairs.push([id, child]);
      }
    }

    for (let i = 0; i < mainKnots.length; i++) {
      pairs.push([mainKnots[i], mainKnots[i + 1]]);
    }

    return pairs;
  }, [nodes]);

  const generateSvg = useCallback(
    (ids: [string, string][]): void => {
      const bubbleDivs: JSX.Element[] = [];
      const svgCollection: JSX.Element[] = [];
      const scrollHeight: number = window.scrollY;
      const width = window.innerWidth;

      for (const id of ids) {
        const parent = document.getElementById(id[0]);
        const child = document.getElementById(id[1]);

        if (!parent || !child) continue;

        const parentRect = parent.getBoundingClientRect();
        const childRect = child.getBoundingClientRect();
        const center =
          parent.classList.contains('card--center') &&
          child.classList.contains('card--center');

        if (
          width <= 1100 &&
          parent.classList.contains('card--center') &&
          !child.classList.contains('card--center')
        ) {
          continue;
        }

        const top =
          width > 1100
            ? scrollHeight -
              childRect.height / 2 +
              parentRect.height / 2 +
              childRect.y -
              (childRect.y - parentRect.y) / 2 +
              8
            : scrollHeight + childRect.y - parentRect.height;

        const left =
          width > 1100
            ? 'calc(50% - 22px)'
            : childRect.x + childRect.width / 2 - 21.5;

        if (center) {
          bubbleDivs.push(
            <div
              key={id[0] + 'bubble'}
              className='bubble'
              onClick={() => {
                dispatch(addCenternode(id[0]));
              }}
              style={{
                top,
                left,
              }}
              //8 is for borderradius 4px * 2
            ></div>
          );
        }
        svgCollection.push(
          <Svg
            key={uuidv4()}
            center={center}
            parentRect={parentRect}
            childRect={childRect}
            scrollHeight={scrollHeight}
          />
        );
      }
      setBubbles(bubbleDivs);
      setSvgs(svgCollection);
    },
    [dispatch]
  );

  useEffect(() => {
    generateSvg(generateSvgParentsAndChildrenIds());
  }, [generateSvgParentsAndChildrenIds, nodes, generateSvg]);

  const [bubbles, setBubbles] = useState<JSX.Element[]>();
  const [svgs, setSvgs] = useState<any>([]);

  return (
    <>
      <div className='svgs'>
        <ResizeObserver
          onResize={(rect) => {
            generateSvg(generateSvgParentsAndChildrenIds());
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
      <div className='bubble-collection'>{bubbles}</div>
    </>
  );
}

interface StateProps {
  nodes: Nodes;
}

const mapStateToProps = (state: AppState): StateProps => ({
  nodes: state.nodes,
});

export default memo(connect(mapStateToProps)(SvgGenerator));
