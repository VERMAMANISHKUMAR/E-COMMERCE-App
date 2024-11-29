// src/components/ProductFilter.js
import React, { useState } from 'react';
import './ProductFilter.css';
const ProductFilter = ({ categories, onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 150000]); // Initial price range

  // Handle category checkbox changes
  const handleCategoryChange = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newCategories);
    onFilterChange(newCategories, priceRange);
  };

  // Handle price range slider change
  const handlePriceChange = (e) => {
    const newRange = [e.target.value, priceRange[1]]; // Only change the minimum value
    setPriceRange(newRange);
    onFilterChange(selectedCategories, newRange);
  };

  const handleMaxPriceChange = (e) => {
    const newRange = [priceRange[0], e.target.value]; // Only change the maximum value
    setPriceRange(newRange);
    onFilterChange(selectedCategories, newRange);
  };

  return (
    <div className="filter-card p-4 mb-4 border rounded">
      <h4 className="mb-4">Filter Products</h4>
      

      {/* Price Filter */}
      <div className="price-filter mb-4">
      <h5>100+  Products</h5>
        <h5>Price Range</h5>
        <div className="d-flex justify-content-between">
          <input
            type="number"
            value={priceRange[0]}
            onChange={handlePriceChange}
            className="form-control me-2"
            min="0"
          />
          <span className="mx-2">to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            className="form-control"
            max="150000"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <h5>Categories</h5>
        {categories.map((category) => (
          <div key={category} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={category}
              value={category}
              onChange={() => handleCategoryChange(category)}
            />
            <label className="form-check-label" htmlFor={category}>
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
