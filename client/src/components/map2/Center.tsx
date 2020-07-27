import React from 'react';
import { Category } from '../../roadmap-data/frontend';

interface Center {
  category: Category;
}

function Center({ category }: Center) {
  return (
    <div className='section__side-elements'>
      <div className='elem'>{category.title}</div>
    </div>
  );
}

export default Center;
