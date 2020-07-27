import React from 'react';
import SectionCategory from './SectionCategory';
import SectionSideElements from './SectionSideElements';
import { v4 as uuidv4 } from 'uuid';
import { Category } from '../../roadmap-data/frontend';

interface Section {
  category: Category;
}

interface SectionSideElementsI {
  children: Category[];
  title: string;
}

type Subchildren = [Category[], string];

function Section(props: Section) {
  const generateChildren = (children: any, direction: string) => {
    if (children.length === 1) return children;
    const middle = Math.floor(props.category.children.length / 2);
    if (direction === 'left') {
      return children.slice(0, middle);
    } else {
      return children.slice(middle);
    }
  };

  const generateSubChildren = (direction: string) => {
    const children = [];
    if (props.category.children) {
      const middle = Math.floor(props.category.children.length / 2);
      let elements;
      if (direction === 'right') {
        elements = props.category.children.slice(middle);
      } else {
        elements = props.category.children.slice(0, middle);
      }
      for (const element of elements) {
        if (element.children.length) {
          children.push([
            ...generateChildren(element.children, 'right'),
            element.title,
          ]);
        }
      }
    }
    return children;
  };

  return (
    <div className='section'>
      {generateSubChildren('left') !== undefined &&
        generateSubChildren('left').map((parent) => {
          return (
            <SectionSideElements
              key={uuidv4()}
              children={[parent[0]]}
              title={parent[1]}
            />
          );
        })}
      <SectionSideElements
        children={generateChildren(props.category.children, 'left')}
        title={props.category.title}
      />
      <SectionCategory
        centerPieceTitle={props.category.title}
        centerPieceType={props.category.type}
      />
      <SectionSideElements
        children={generateChildren(props.category.children, 'right')}
        title={props.category.title}
      />
      {generateSubChildren('right').map((parent) => {
        return (
          <SectionSideElements
            key={uuidv4()}
            children={[parent[0]]}
            title={parent[1]}
          />
        );
      })}
    </div>
  );
}

export default Section;
