import React, { memo } from 'react';
import { Category } from '../../roadmap-data/frontend';
import Child from './Child';
import { v4 as uuidv4 } from 'uuid';

interface Children {
  children: Category[] | Category;
  subchildren?: boolean;
  center?: boolean;
  left?: boolean;
  right?: boolean;
}

function Children({ children, ...props }: Children): JSX.Element | null {
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
      {Array.isArray(children) ? (
        children.map((child) => {
          return (
            <Child
              key={uuidv4()}
              child={child}
              subchildren={props.subchildren}
              center={props.center ? true : false}
              left={props.left}
              right={props.right}
            />
          );
        })
      ) : (
        <Child
          child={children}
          subchildren={props.subchildren}
          center={props.center ? true : false}
          left={props.left}
          right={props.right}
        />
      )}
    </div>
  );
}

export default memo(Children);
