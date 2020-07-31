import React, { useState, useEffect, useCallback, memo } from 'react';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import { Map as MapT } from '../types/Map';

export interface Sections {
  [key: string]: [MapT, MapT[]];
}

export interface MapType {
  data: MapT[];
}

export type IDs = [string, string][];

function Map({ data }: MapType): JSX.Element {
  const [sections, updateSections] = useState<Sections>({});

  const generateSections = useCallback((): Sections => {
    const sections: Sections = {};
    for (const section of data) {
      const center: MapT = section;
      const children: MapT[] = [...section.children];
      sections[section.title] = [center, children];
    }
    return sections;
  }, [data]);

  useEffect(() => {
    updateSections(generateSections());
  }, [generateSections, data]);

  return (
    <div className='map'>
      {Object.keys(sections).map((section, index) => {
        return (
          <Section index={index} key={uuidv4()} sections={sections[section]} />
        );
      })}
    </div>
  );
}

export default memo(Map);
