import React, { memo } from 'react';
import Child from './Child';
import { v4 as uuidv4 } from 'uuid';
import { Nodes } from '../types/Map-Data';

interface Children {
  children: string[];
  subchildren?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
  data: Nodes;
}

function Children({ children, data, ...props }: Children): JSX.Element | null {
  if (Array.isArray(children) && children.length === 0) return null;
  return (
    <div
      className={`section__side-elements ${
        props.left
          ? 'section__side-elements--left'
          : props.right
          ? 'section__side-elements--right'
          : ''
      } ${props.center ? 'section__side-elements--center-section' : ''} ${
        props.subchildren ? 'section__side-elements--subchild' : ''
      }`}
    >
      {children.map((child) => {
        return (
          <Child
            key={uuidv4()}
            child={child}
            subchildren={props.subchildren}
            center={props.center}
            left={props.left}
            right={props.right}
            data={data}
          />
        );
      })}
    </div>
  );
}

export default memo(Children);
