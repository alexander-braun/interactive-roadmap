import React, { useState, useEffect, useCallback, memo } from 'react';
import Section from './Section';
import { v4 as uuidv4 } from 'uuid';
import { Nodes } from '../types/Map-Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
              <FontAwesomeIcon
                icon={faExclamation}
                className='map__indication-circle'
              />
              Recommended Option
            </li>
            <li className='map__li'>
              <FontAwesomeIcon
                icon={faCheck}
                className='map__indication-circle map__indication-circle--option'
              />
              Good Alternative
            </li>
            <li className='map__li'>
              <div className='map__indication-circle map__indication-circle--not-recommended'></div>
              Not recommended
            </li>
          </ul>
        </div>
        <div className='map__resource-wrapper'>
          <div className='map__resource-text'>
            Visit the repository for this project
          </div>
          <a
            className='map__github-link'
            href='https://github.com/alexander-braun'
            target='blank'
          >
            <FontAwesomeIcon icon={faGithub} className='map__github-icon' />
          </a>
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
