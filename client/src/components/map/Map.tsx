import React, { useState, useEffect, useCallback, memo } from 'react';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import { Nodes } from '../types/Map-Data';
import MapLegend from './MapLegend';

export interface Map {
  nodes: Nodes;
}

export type Sections = string[];

function Map({ nodes }: Map): JSX.Element {
  const [sections, updateSections] = useState<Sections>([]);
  const generateSections = useCallback((): string[] => {
    const sections: Sections = [];
    for (const node of Object.keys(nodes)) {
      if (nodes[node].mainKnot) {
        sections.push(node);
      }
    }
    return sections;
  }, [nodes]);

  useEffect(() => {
    updateSections(generateSections());
  }, [generateSections, nodes]);

  return (
    <div className='map'>
      <MapLegend />
      {sections.map((section) => {
        return <Section key={uuidv4()} sectionId={section} nodes={nodes} />;
      })}
    </div>
  );
}

export default memo(Map);
