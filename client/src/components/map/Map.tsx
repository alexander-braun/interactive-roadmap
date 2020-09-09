import React, { useState, useEffect, useCallback, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Types
import { Nodes } from '../types/Map-Data';

//Components
import MapLegend from './MapLegend';
import Section from './Section';

export interface Map {
  nodes: Nodes;
}
export type Sections = string[];

function Map({ nodes }: Map): JSX.Element {
  const [sections, updateSections] = useState<Sections>([]);

  /**
   * Searches for the mainKnots in the center.
   * Those mainKnots are the roots of a section.
   */
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
    <main className='map'>
      <MapLegend />
      {sections.map((section) => {
        return <Section key={uuidv4()} sectionId={section} nodes={nodes} />;
      })}
    </main>
  );
}

export default memo(Map);
