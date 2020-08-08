import React, { useState, useEffect, useCallback, memo } from 'react';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import { Nodes } from '../types/Map-Data';
import MapLegend from './MapLegend';

export interface Map {
  data: Nodes;
}

export type Sections = string[];

function Map({ data }: Map): JSX.Element {
  const [sections, updateSections] = useState<Sections>([]);
  const generateSections = useCallback((): string[] => {
    const sections: Sections = [];
    for (const node of Object.keys(data)) {
      if (data[node].mainKnot) {
        sections.push(node);
      }
    }
    return sections;
  }, [data]);

  useEffect(() => {
    updateSections(generateSections());
  }, [generateSections, data]);

  return (
    <div className='map'>
      <MapLegend />
      {sections.map((section) => {
        return <Section key={uuidv4()} sectionId={section} data={data} />;
      })}
    </div>
  );
}

export default memo(Map);
