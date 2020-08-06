import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export type IDs = [string, string][];

function Header(): JSX.Element {
  return (
    <div className='header'>
      <h1 className='header__heading'>Frontend Developer</h1>
    </div>
  );
}

export default Header;
