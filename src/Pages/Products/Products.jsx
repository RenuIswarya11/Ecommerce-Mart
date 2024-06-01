import React, { useContext } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import Navbar from "../../components/Navbar";
import { ProductsContext } from "../../contexts/ProductsContext"; // Import the ProductsContext

const Products = () => {
  const { cart, addToCartHandler } = useContext(CartContext);
  const {
    productsData,
    myFilters,
    searchText,
    priceSliderHandler,
    radioHandler,
    sortHandler,
    searchTextHandler,
    checkboxHandler,
    searchClickHandler,
    sortFiltered,
    clearFilters,
    isLoading,
    setIsLoading,
    setMyFilters,
  } = useContext(ProductsContext); // Consume the products context










  

  const descriptionStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, // Number of lines to show
    maxHeight: "3em", // Adjust as needed based on line height and font size
  };

  // Handler function for updating category filter
  // const handleCategoryChange = (event) => {
  //   const { value, checked } = event.target;
  //   if (checked) {
  //     checkboxHandler(value);
  //   } else {
  //     checkboxHandler(value);
  //   }
  // };


  // const handleCategoryChange = (event) => {
  //   const { value, checked } = event.target;
  
  //   // Update categoryChecked state
  //   setCategoryChecked((prevChecked) => ({
  //     ...prevChecked,
  //     [value]: checked,
  //   }));
  
  //   // Update myFilters.categoryFilter state
  //   if (checked) {
  //     setMyFilters((prevFilters) => ({
  //       ...prevFilters,
  //       categoryFilter: [...prevFilters.categoryFilter, value],
  //     }));
  //   } else {
  //     setMyFilters((prevFilters) => ({
  //       ...prevFilters,
  //       categoryFilter: prevFilters.categoryFilter.filter((category) => category !== value),
  //     }));
  //   }
  // };

  // Handler function for updating price range filter
  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    priceSliderHandler({ [name]: parseInt(value) }); // Call priceSliderHandler from context
  };
  

  // Handler function for updating rating filter
  // const handleRatingChange = (event) => {
  //   const { value } = event.target;
  //   radioHandler(value);
  // };

  // Handler function for updating sort by filter
  // const handleSortByChange = (event) => {
  //   const { value } = event.target;
  //   sortHandler(value);
  // };

  return (
    <>
      <Navbar />

      <div className="content-filter-wrapper">
        <div className="contentAndFilterDiv">
          <div className="filter-div">
            <div className="clearFilter">
              <h3>Filters</h3>

              <div>
                <button className="clearFilterBtn" onClick={clearFilters}>
                  Clear Filters
                </button>
              </div>
            </div>

            <div className="price-div">
              <h3>Price</h3>
              <div className="price-range-slider">
                <span>Min Price: {myFilters.priceFilter.min}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={myFilters.priceFilter.min}
                  name="min"
                  onChange={handlePriceRangeChange}
                  step="10"
                />

                <span>Max Price: {myFilters.priceFilter.max}</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={myFilters.priceFilter.max}
                  name="max"
                  onChange={handlePriceRangeChange}
                  step="10"
                />
              </div>
            </div>

            <div className="CheckBoxFilterDiv">
              <h3>Category</h3>
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="Nutritional Supplements"
                  checked = {myFilters.categoryFilter.includes("Nutritional Supplements")}
                  onChange={(e) => checkboxHandler(e.target.value)}
                />
                Nutritional Supplements
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  value="Organic and Natural Products"
                  checked = {myFilters.categoryFilter.includes("Organic and Natural Products")}
                  onChange={(e) => checkboxHandler(e.target.value)}
                />
                Organic and Natural Products
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked = {myFilters.categoryFilter.includes("Fitness Equipment and Gear")}
                  value="Fitness Equipment and Gear"
                  onChange={(e) => checkboxHandler(e.target.value)}
                />
                Fitness Equipment and Gear
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked = {myFilters.categoryFilter.includes("Personal Care and Beauty")}
                  value="Personal Care and Beauty"
                  onChange={(e) => checkboxHandler(e.target.value)}
                />
                Personal Care and Beauty
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked = {myFilters.categoryFilter.includes("Mindfulness and Meditation")}
                  value="Mindfulness and Meditation"
                  onChange={(e) => checkboxHandler(e.target.value)}
                />
                Mindfulness and Meditation
              </label>
              {/* Add more categories here */}
            </div>

            <div className="radioFilterDiv">
              <h3>Rating</h3>
              <label className="radio">
                <input
                checked={myFilters.ratingFilter === 1}
                  type="radio"
                  name="rating"
                  value="1"
                  onChange={(e) => radioHandler(e.target.value)}
                />
                1 star and above
              </label>
              <label className="radio">
                <input
                checked={myFilters.ratingFilter === 2}
                  type="radio"
                  name="rating"
                  value="2"
                  onChange={(e) => radioHandler(e.target.value)}
                />
                2 stars and above
              </label>
              <label className="radio">
                <input
                checked = {myFilters.ratingFilter === 3}
                  type="radio"
                  name="rating"
                  value="3"
                  onChange={(e) => radioHandler(e.target.value)}
                />
                3 stars and above
              </label>
              <label className="radio">
                <input
                checked = {myFilters.ratingFilter === 4}
                  type="radio"
                  name="rating"
                  value="4"
                  onChange={(e) => radioHandler(e.target.value)}
                />
                4 stars and above
              </label>
              {/* Add more rating options here */}
            </div>
            <div className="radioFilterDiv">
              <h3>Sort By</h3>
              <label className="radio">
                <input
                checked = {myFilters.sortFilter === "lToH"}
                  type="radio"
                  name="sortBy"
                  value="lToH"
                  onChange={(e) => sortHandler(e.target.value)}
                />
                Price - Low To High
              </label>
              <label className="radio">
                <input
                checked = {myFilters.sortFilter === "hToL"}
                  type="radio"
                  name="sortBy"
                  value="hToL"
                  onChange={(e) => sortHandler(e.target.value)}
                />
                Price - High To Low
              </label>
              {/* Add more sorting options here */}
            </div>
          </div>
        </div>
        <div className="products">
          {sortFiltered.map((product) => (
            <div key={product._id} className="product-card">
              <NavLink to={`/products/${product._id}`}>
                <div className="card-img">
                  <img
                    src={product.img}
                    alt={product.img}
                    width="400px"
                    height="250px"
                  />
                </div>
              </NavLink>

              <h5 style={descriptionStyle}>{product.name}</h5>
              <div className="price">
                <p>
                  <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                  {product.price}
                </p>

                <p className="line-through">
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  {product.originalPrice}
                </p>
                {/* Add more product details */}
                <p>
                  {product.rating}
                  <i className="fa-regular fa-star"></i>
                </p>
              </div>

              <button onClick={() => addToCartHandler(product)}>
                Add To Cart <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
