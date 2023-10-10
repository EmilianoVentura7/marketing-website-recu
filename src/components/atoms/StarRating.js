import React from 'react';

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : 'empty'}`}
          role="img"
          aria-label={i <= rating ? 'Estrella llena' : 'Estrella vacía'}
        >
          ⭐
        </span>
      );
    }
    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default StarRating;
