import React, { useEffect, useState } from 'react';
import { frontend } from '../../roadmap-data/frontend';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import SVG from './SVG';
import ResizeObserver from 'react-resize-observer';

function Main() {
  const [svgs, updateSvgs]: any = useState([]);

  useEffect(() => {
    updateSvgs(generateSvgs());
  }, []);

  const generateSvgs = () => {
    const svgs = [];
    const children = [];
    let parents = [];
    const elements: any = document.getElementsByClassName('elem');
    for (const element of elements) {
      const dataVal = element.getAttribute('data-parent');
      if (dataVal) {
        children.push(element);
      } else {
        parents.push(element);
      }
    }
    for (const parent of parents) {
      const parentRect = parent.getBoundingClientRect();
      for (const child of children) {
        if (
          child.getAttribute('data-parent') ===
          parent.getAttribute('data-children')
        ) {
          const childRect = child.getBoundingClientRect();
          svgs.push(
            <SVG key={uuidv4()} parentRect={parentRect} childRect={childRect} />
          );
        }
      }
    }
    return svgs;
  };

  const generateCategories = () => {
    const categories = [];
    for (const category of frontend) {
      categories.push(<Section key={uuidv4()} category={category}></Section>);
    }
    return categories;
  };

  return (
    <div className='main'>
      <ResizeObserver
        onResize={() => {
          updateSvgs(generateSvgs());
        }}
      />
      {generateCategories()}
      {svgs}
    </div>
  );
}

export default Main;
