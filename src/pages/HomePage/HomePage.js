import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import ProductFilter from '../../components/Filter/ProductFilter';
import ProductList from '../../components/ProductList';
import Loader from '../../components/Loader/Loader';
import initialProducts from '../../components/ProductItem/initialProducts';

const HomePage = () => {
  const categories = ['Electronics','Airbuds','Cloth for men','Cloth for Women',"Women Western","Sarees","Home & Kitchen","Beauty & Health","Jewellery","Boys & Footwear",'Furniture', 'Sports & Fitness',"Car & Motorbike", 'Kids & Toys',"Books","Grocery","Pet Supplies","Musiccal Instruments" ];
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate a loading delay for demonstration (optional)
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Set to 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (selectedCategories, priceRange) => {
     // Start loader when filter is applied
   // setLoading(true);
    setTimeout(() => {
      const filtered = initialProducts.filter((product) => {
        const inCategory = selectedCategories.length
          ? selectedCategories.includes(product.category)
          : true;

        const inPriceRange =
          product.price >= priceRange[0] && product.price <= priceRange[1];

        const matchesSearchQuery = product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return inCategory && inPriceRange && matchesSearchQuery;
      });

      setFilteredProducts(filtered);
      setLoading(false); // Stop loader when filtering is complete
    }, 500); // Optional delay for the filtering effect
  };

  const handleSearchChange = (e) => {
    setLoading(true);
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = initialProducts.filter((product) => {
      const matchesSearchQuery = product.name.toLowerCase().includes(query);
      return matchesSearchQuery;
    });
    setFilteredProducts(filtered);
    setLoading(false);
  };

  return (
    <div className="container">
      {loading && <Loader />} {/* Show loader if loading */}
      <div className="row my-3">
        <div className="col-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search For Products Name..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <ProductFilter categories={categories} onFilterChange={handleFilterChange} />
        </div>

        <div className="col-md-9">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
