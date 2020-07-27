import React, { useEffect, useState } from 'react';
import '../App.css';
import { frontend, Category } from '../../roadmap-data/frontend';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';

export interface Sections {
  [key: string]: [Category, Category[], Category[]];
}

function Map() {
  const [sections, setSections]: [Sections, Function] = useState({});
  const generateElements = (): Sections => {
    const sections: Sections = {};
    for (const section of frontend) {
      const center: Category = section;
      const children: Category[] = [];
      const subchildren: Category[] = [];
      for (const child of section.children) {
        if (child.children) {
          subchildren.push(...child.children);
        }
        children.push(child);
      }
      sections[section.title] = [center, children, subchildren];
    }
    return sections;
  };

  useEffect(() => {
    setSections(generateElements());
  }, []);

  return (
    <div className='map'>
      {Object.keys(sections).map((section) => {
        return <Section key={uuidv4()} sections={sections[section]} />;
      })}
    </div>
  );
}

export default Map;
