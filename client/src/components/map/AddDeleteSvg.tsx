import React from 'react';

interface AddDeleteSvg {
  title: string;
}

const AddDeleteSvg = ({ title }: AddDeleteSvg) => {
  return (
    <svg
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 512 512'
    >
      <title>{title}</title>
      <path
        d='M256,24C383.9,24,488,128.1,488,256S383.9,488,256,488,24.06,383.9,24.06,256,128.1,24,256,24ZM0,256C0,397.16,114.84,512,256,512S512,397.16,512,256,397.16,0,256,0,0,114.84,0,256Z'
        fill='#2b78e4'
      />
      <polygon
        points='382 172.72 339.29 130.01 256 213.29 172.72 130.01 130.01 172.72 213.29 256 130.01 339.28 172.72 382 256 298.71 339.29 381.99 382 339.28 298.71 256 382 172.72'
        fill='#2b78e4'
      />
    </svg>
  );
};

export default AddDeleteSvg;
