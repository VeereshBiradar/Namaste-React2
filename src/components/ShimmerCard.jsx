// ShimmerCard.js
import React from 'react';
import '../styles/ShimmerCard.scss';

const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-card__image"></div>
      <div className="shimmer-card__info">
        <div className="shimmer-card__name"></div>
        <div className="shimmer-card__cuisine"></div>
        <div className="shimmer-card__details">
          <div className="shimmer-card__rating"></div>
          <div className="shimmer-card__delivery-time"></div>
        </div>
        <div className="shimmer-card__cost"></div>
        <div className="shimmer-card__cuisines"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
