import React from 'react';
import StarRating from '../atoms/StarRating';
import '../../styles/FeatureCard.css';

const FeatureCard = ({ imageSrc, productName, description, rating }) => {
  return (
    <div className="container card content">
      <div className="img-box">
        <img src={imageSrc} alt={productName} className="img" />
      </div>
      <h3>{productName}</h3>
      <p>{description}</p>
      <StarRating rating={rating} />
    </div>
  );
};

export default FeatureCard;
