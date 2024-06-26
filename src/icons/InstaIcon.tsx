import React, { FC } from 'react';

interface IProps {
  color?: string;
  size?: number;
  className?: string;
}

const InstaIcon: FC<IProps> = ({ size = 20, color = '#333', className }) => {
  return (
    <svg className={className} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path fill={color} d="M437 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h362c41.352 0 75-33.648 75-75V75c0-41.352-33.648-75-75-75zM257 390c-74.441 0-135-60.559-135-135s60.559-135 135-135 135 60.559 135 135-60.559 135-135 135zm150-240c-24.813 0-45-20.188-45-45s20.188-45 45-45 45 20.188 45 45-20.188 45-45 45zm0 0" />
      <path fill={color} d="M407 90c-8.277 0-15 6.723-15 15s6.723 15 15 15 15-6.723 15-15-6.723-15-15-15zm0 0M257 150c-57.89 0-105 47.11-105 105s47.11 105 105 105 105-47.11 105-105-47.11-105-105-105zm0 0" />
    </svg>
  );
};

export default InstaIcon;
