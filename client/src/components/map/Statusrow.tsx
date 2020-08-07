import React, { useState } from 'react';

interface Statusrow {
  handleStatusUpdate: (status: string) => void;
  status: string;
}

const Statusrow = ({ handleStatusUpdate, status }: Statusrow) => {
  const [statusVisible, updateStatusVisible] = useState(false);
  return (
    <div className='card__bottom-row'>
      <div
        className='card__status'
        onMouseEnter={() => updateStatusVisible(true)}
        onMouseLeave={() => updateStatusVisible(false)}
      >
        <div
          className={`card__status-choice ${
            statusVisible ? '' : 'card__status-choice--hidden'
          }`}
        >
          <div
            onClick={() => handleStatusUpdate('Done')}
            className='card__status-dot--done-dot'
            title='Done'
          ></div>
          <div
            onClick={() => handleStatusUpdate('In-Work')}
            className='card__status-dot--in-progress-dot'
            title='In Progress'
          ></div>
          <div
            onClick={() => handleStatusUpdate('Pending')}
            className='card__status-dot--pending-dot'
            title='Pending'
          ></div>
        </div>
        {status === 'Done' ? (
          <div className='card__status-wrapper'>
            <div className='card__status--done-dot' title='Done'></div>
            <div className='card__status--status-text'>Done</div>
          </div>
        ) : status === 'Pending' ? (
          <div className='card__status-wrapper'>
            <div className='card__status--pending-dot' title='Pending'></div>
            <div className='card__status--status-text'>Pending</div>
          </div>
        ) : (
          <div className='card__status-wrapper'>
            <div
              className='card__status--in-progress-dot'
              title='In Progress'
            ></div>
            <div className='card__status--status-text'>In Progress</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Statusrow;
