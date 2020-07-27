import React from 'react';
import { Category } from '../../roadmap-data/frontend';
import { v4 as uuidv4 } from 'uuid';

interface Children {
  children: Category[] | Category;
}

function Children({ children }: Children) {
  return (
    <div className='section__side-elements'>
      {Array.isArray(children) ? (
        children.map(
          (child): JSX.Element => {
            return (
              <div key={uuidv4()} className='elem'>
                {child.title}
              </div>
            );
          }
        )
      ) : (
        <div className='elem'>{children.title}</div>
      )}
    </div>
  );
}

export default Children;
