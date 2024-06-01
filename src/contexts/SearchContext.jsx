import React, { createContext, useState, useContext } from 'react';
import { ProductsData } from "../backend/db/ProductsData";
// Create a context for managing search functionality
export const SearchContext = createContext();

// Custom hook to consume the search context
export const useSearch = () => useContext(SearchContext);

// SearchProvider component to wrap the application and provide search functionality
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products

  // Function to filter products based on search query
  const filterProducts = (query) => {
    // Implement your filtering logic here, such as filtering products from an API or a local data source
    // For demonstration, let's assume ProductsData is an array of products
    const filteredProducts = ProductsData.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filterProducts, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};
