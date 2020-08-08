import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamation,
  faCheck,
  faTimes,
  faPenNib,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MapLegend = () => {
  return (
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
            <FontAwesomeIcon
              className='map__indication-circle map__indication-circle--not-recommended'
              icon={faTimes}
            />
            Not recommended
          </li>
          <li className='map__li'>
            <FontAwesomeIcon
              className='map__indication-circle map__indication-circle--own-edit'
              icon={faPenNib}
            />
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
