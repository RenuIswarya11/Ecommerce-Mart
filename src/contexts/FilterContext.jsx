import React, { createContext, useContext, useState } from "react";

// Create the FilterContext
const FilterContext = createContext();

// Custom hook to consume the FilterContext
export const useFilter = () => useContext(FilterContext);

// Create the FilterProvider component
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: { min: 100, max: 1000 },
    rating: null,
    sortBy: "",
  });

  // Function to set filter options
  const setFilterOption = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  // Function to clear all filters
  const clearFilters = () => {
    setFilters({
      category: [],
      priceRange: { min: 100, max: 1000 },
      rating: null,
      sortBy: "",
    });
  };

  return (
    <FilterContext.Provider value={{ filters, setFilterOption, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
