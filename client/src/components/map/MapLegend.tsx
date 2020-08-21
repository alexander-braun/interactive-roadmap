import React from 'react';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * Explanatory stateless component
 */
const MapLegend = () => {
  return (
    <div className='map__section-start'>
      <div className='map__legend'>
        <ul className='map__ul'>
          <li className='map__li'>
            <div className='map__indication-circle'>!</div>
            Recommended Option
          </li>
          <li className='map__li'>
            <div className='map__indication-circle--option map__indication-circle'>
              ✓
            </div>
            Good Alternative
          </li>
          <li className='map__li'>
            <div className='map__indication-circle map__indication-circle--not-recommended'>
              ✘
            </div>
            Not recommended
          </li>
          <li className='map__li'>
            <div className='map__indication-circle map__indication-circle--own-edit'>
              A
            </div>
            Assign yourself
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
  );
};

export default MapLegend;
