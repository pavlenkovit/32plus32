import React from 'react';

const BedIcon = ({ color = '#333', size = 14, className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 490.7 490.7">
      <path d="M436.2 154.6H182.4c-12.4 0-33.1 4.7-33.1 36.6V240h320v-48.8c0-31.8-20.7-36.6-33.1-36.6z" fill={color} />
      <path d="M80.3 250.6H32V80H0v330.7h32v-85.4h426.7v85.3h32v-160z" fill={color} />
      <circle cx="85.3" cy="197.3" r="44.7" fill={color} />
    </svg>
  );
};

export default BedIcon;
