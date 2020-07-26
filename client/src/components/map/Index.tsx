import React, { useEffect, useState } from 'react';
import { frontend } from '../../roadmap-data/frontend';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import SVG from './SVG';
import ResizeObserver from 'react-resize-observer';

const Main: React.FC = (): JSX.Element => {
  const [svgs, updateSvgs] = useState<JSX.Element[]>([]);

  useEffect(() => {
    updateSvgs(generateSvgs());
  }, []);

  const generateSvgs = (): JSX.Element[] => {
    const svgs: JSX.Element[] = [];
    const children: Element[] = [];
    let parents: Element[] = [];
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName(
      'elem'
    );
    for (const element of elements) {
      const dataVal: string | null = element.getAttribute('data-parent');
      const childVal: string | null = element.getAttribute('data-children');
      if (dataVal) {
        children.push(element);
      }
      if (childVal) {
        parents.push(element);
      }
    }
    for (const parent of parents) {
      const parentRect: DOMRect = parent.getBoundingClientRect();
      for (const child of children) {
        if (
          child.getAttribute('data-parent') ===
          parent.getAttribute('data-children')
        ) {
          const childRect: DOMRect = child.getBoundingClientRect();
          svgs.push(
            <SVG key={uuidv4()} parentRect={parentRect} childRect={childRect} />
          );
        }
      }
    }
    return svgs;
  };

  const generateCategories = (): JSX.Element[] => {
    const categories: JSX.Element[] = [];
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
};

export default Main;
