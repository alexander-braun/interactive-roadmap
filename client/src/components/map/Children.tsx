import React from 'react';
import { Category } from '../../roadmap-data/frontend';
import Child from './Child';
import { v4 as uuidv4 } from 'uuid';

interface Children {
  children: Category[] | Category;
  subchildren?: boolean;
  center?: boolean;
}

function Children({ children, ...props }: Children): JSX.Element | null {
  if (Array.isArray(children) && children.length === 0) return null;
  return (
    <div className='section__side-elements'>
      {Array.isArray(children) ? (
        children.map((child) => {
          return (
            <Child
              key={uuidv4()}
              child={child}
              subchildren={props.subchildren}
            />
          );
        })
      ) : (
        <Child child={children} subchildren={props.subchildren} />
      )}
    </div>
  );
}

export default Children;
