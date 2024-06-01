// ProductsContext.jsx
import React, { createContext, useEffect, useState } from "react";
import { Products } from "../backend/db/ProductsData"; // Adjust this import based on your file structure

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [myFilters, setMyFilters] = useState({
        textFilter: "",
        priceFilter: { min: 0, max: 100 },
        categoryFilter: [],
        ratingFilter: 0,
        sortFilter: "",
    });





    const [categoryChecked, setCategoryChecked] = useState({
        "Nutritional Supplements": false,
        "Organic and Natural Products": false,
        "Fitness Equipment and Gear": false,
        "Personal Care and Beauty": false,
        "Mindfulness and Meditation": false,
        // Add more categories here
      });
    
      // Update checked state when categoryFilter changes
      useEffect(() => {
        const updatedCheckedState = {};
        for (const category of Object.keys(categoryChecked)) {
          updatedCheckedState[category] = myFilters.categoryFilter.includes(category);
        }
        setCategoryChecked(updatedCheckedState);
      }, [myFilters.categoryFilter]);
    
      // Handler function for updating category filter

    



      
      // Handler function for clearing filters
      











    console.log(myFilters);
    console.log(searchText);

    myFilters.textFilter = searchText;

    const fetchData = () => {
        try {
            setIsLoading(true);
            // Assuming your data is stored in the `Products` object imported from "../backend/db/ProductsData"
            setProductsData(Products); // Assuming `Products` is your array of products
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const searchTextHandler = (text) => {
      
        setSearchText(text);
    };

    // const searchClickHandler = () => {
    //     setMyFilters({ ...myFilters, textFilter: searchText }); // Update textFilter in myFilters
    //   };
    const priceSliderHandler = ({ min, max }) => {
        // Update the price filter based on the input values
        setMyFilters((prevFilters) => ({
          ...prevFilters,
          priceFilter: {
            min: min !== undefined ? parseInt(min) : prevFilters.priceFilter.min,
            max: max !== undefined ? parseInt(max) : prevFilters.priceFilter.max,
          },
        }));
      };

      const checkboxHandler = (category) => {

        myFilters.categoryFilter.includes(category)
            ? setMyFilters({
                ...myFilters,
                categoryFilter: myFilters.categoryFilter.filter(
                    (categoryFilter) => categoryFilter !== category
                )
            })
            : setMyFilters({
                ...myFilters,
                categoryFilter: [...myFilters.categoryFilter, category]
            });
    }

    const radioHandler = (stars) => {
        setMyFilters({ ...myFilters, ratingFilter: Number(stars) });
    };

    const sortHandler = (sortOrder) => {
        setMyFilters({ ...myFilters, sortFilter: sortOrder });
    };

    const textFiltered = myFilters.textFilter?.length > 0
        ? [...productsData].filter(
              ({ name, category }) =>
                  name.toLowerCase().includes(myFilters.textFilter.toLowerCase()) ||
                  category.toLowerCase().includes(myFilters.textFilter.toLowerCase())
          )
        : [...productsData];

        console.log(myFilters.textFilter);


        console.log(textFiltered);


        const priceFiltered = [...textFiltered].filter(({ price }) => {
            const { min, max } = myFilters.priceFilter;
            if (min === 0 && max === 100) {
              // If both min and max are default, return true for all products
              return true;
            }
            if (min > 0 && max < 100) {
              // If both min and max are set, filter products within the range
              return price >= min && price <= max;
            }
            if (min > 0) {
              // If only min is set, filter products with price greater than or equal to min
              return price >= min;
            }
            if (max < 100) {
              // If only max is set, filter products with price less than or equal to max
              return price <= max;
            }
            return true; // Fallback to return true for all products
          });
          

    const categoryFiltered = myFilters.categoryFilter.length > 0
        ? [...priceFiltered].filter(({ category }) =>
              myFilters.categoryFilter.includes(category)
          )
        : [...priceFiltered];

    const ratingFiltered = myFilters.ratingFilter > 0
        ? [...categoryFiltered].filter(({ rating }) => rating >= myFilters.ratingFilter)
        : [...categoryFiltered];

    const sortFiltered = myFilters.sortFilter.length > 0
        ? [...ratingFiltered].sort((item1, item2) =>
              myFilters.sortFilter === "lToH"
                  ? item1?.price - item2?.price
                  : item2?.price - item1?.price
          )
        : [...ratingFiltered];

        console.log(sortFiltered);

    const clearFilters = () => {

        setCategoryChecked({
            "Nutritional Supplements": false,
            "Organic and Natural Products": false,
            "Fitness Equipment and Gear": false,
            "Personal Care and Beauty": false,
            "Mindfulness and Meditation": false,
            // Add more categories here
          });

        setSearchText("");
        setMyFilters({
            textFilter: "",
            priceFilter: { min: 0, max: 100 },
            categoryFilter: [],
            ratingFilter: 0,
            sortFilter: "",
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                productsData,
                myFilters,
                setSearchText,
                searchText,
                priceSliderHandler,
                radioHandler,
                sortHandler,
                searchTextHandler,
                checkboxHandler,
                // searchClickHandler,
                sortFiltered,
                clearFilters,
                isLoading,
                setIsLoading,
                setCategoryChecked
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

// export default { ProductsContext, ProductProvider };
