import React, { useState, useEffect, useCallback, memo } from 'react';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import { Nodes } from '../types/Map-Data';

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
      <div className='map__section-start'>
        <div className='map__legend'>
          <ul className='map__ul'>
            <li className='map__li'>
              <div className='map__indication-circle'>✓</div>Person
              Recommendation / Option
            </li>
            <li className='map__li'>
              <div className='map__indication-circle map__indication-circle--option'>
                ✓
              </div>
              Alternative Option - Pick this or purple
            </li>
            <li className='map__li'>
              <div className='map__indication-circle map__indication-circle--not-recommended'>
                ✓
              </div>
              Order in roadmap not strict (Learn anytime)
            </li>
            <li className='map__li'>
              <div className='map__indication-circle map__indication-circle--not-recommended'></div>
              I wouldn't recommend
            </li>
          </ul>
        </div>
        <div className='map__resource-wrapper'>
          <div className='map__resource-text'>
            Find the detailed version of this roadmap along with resources and
            other roadmaps
          </div>
          <div className='map__resource-link'>
            <a href='http://roadmap.sh' target='blank'>
              http://roadmap.sh
            </a>
          </div>
        </div>
      </div>
      {sections.map((section, index) => {
        return (
          <Section
            key={uuidv4()}
            sectionId={section}
            data={data}
            index={index}
          />
        );
      })}
    </div>
  );
}

export default memo(Map);
