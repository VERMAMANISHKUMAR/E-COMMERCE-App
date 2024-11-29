// src/components/ProductList.js
import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons'; // Import the outlined star
import './ProductList.css'; // Import custom CSS

const ProductList = ({ products }) => {
  // Helper function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star-icon" />);
      } else if (i - rating < 1) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="star-icon" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarOutline} className="star-icon" />);
      }
    }
    return stars;
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} className="product-img" alt={product.name} />
          <div className="product-details">
            <h6 className="product-title">{product.name}</h6>
            <p className="product-price">Price: ₹ {product.price}</p>
            {/* Display product rating */}
            <div className="product-rating">
              <p>Rating: </p>
              <div>{renderStars(product.rating)}</div>
            </div>
            {/* Add to Cart button */}
            <Link  to="/signin">
            <button className="add-to-cart-btn">Add to Cart</button>
          </Link>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
