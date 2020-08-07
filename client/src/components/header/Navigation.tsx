import React from 'react';

export type IDs = [string, string][];

function Navigation(): JSX.Element {
  return (
    <>
      <div className='menue-bar__spaceholder'></div>
      <div className='menue-bar'>
        <div className='menue-bar__title'>Interactive Roadmap</div>
        <div className='menue-bar__links'>
          <button className='menue-bar__link'>Save</button>
          <button className='menue-bar__link'>Load</button>
          <button className='menue-bar__link'>Login</button>
          <button className='menue-bar__link'>
            Register<span className='menue-bar__free-indicator'>(free)</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
