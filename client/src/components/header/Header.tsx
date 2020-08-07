import React from 'react';
import HeaderSvg from './HeaderSvg';

export type IDs = [string, string][];

function Header(): JSX.Element {
  return (
    <div className='header'>
      <HeaderSvg />
      <h1 className='header__heading'>Frontend Developer</h1>
    </div>
  );
}

export default Header;
