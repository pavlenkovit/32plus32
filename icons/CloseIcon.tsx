import React, { FC } from 'react';

interface IProps {
  color?: string;
  size?: number;
}

const CloseIcon: FC<IProps> = ({ size = 16, color = '#fff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 357 357">
      <path fill={color} d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
    </svg>
  );
};

export default CloseIcon;
