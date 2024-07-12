import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStar = ({ rating }) => {
  const stars = [];

  
  for (let i = 0; i < rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default RatingStar;
