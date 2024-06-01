import React, { useState, useContext } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/MBS-Logo.png";
import { ProductsContext, ProductProvider } from "../contexts/ProductsContext"; // Import the ProductsContext
import { CartContext } from "../contexts/CartContext";
import { WishListContext } from "../contexts/WishListContext";


const Navbar = () => {

  const { searchText,  searchTextHandler } = useContext(ProductsContext);
  const hiddenRoutes = ['/login', '/signup', '/user', '/', '/cart', '/wishList', '/checkout'];
  const isHiddenRoute = hiddenRoutes.includes(location.pathname);
  
  const { cart } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);
  const navigate = useNavigate();
  const { setIsLoading } = useContext(ProductsContext);


  const loadingHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  

  return (
    <>
      <div className="nav-div">
        <div className="logo-div">
          <img src={Logo} width="50px" height="50px" alt="" className="logo" />

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h2 style={{ textDecoration: "none" }}>Mind Body Soul</h2>
          </NavLink>
        </div>


        {!isHiddenRoute && (
        <div className="searchBar-div">
        <input
          className="searchbar"
          placeholder="Search Products..."
          value={searchText}
          onChange={(e) => {
            searchTextHandler(e.target.value);
          }} // Attach event handler for input change
        />
        {/* <button
          className="searchbtn"
          onClick={() => {
            searchTextHandler(localText);
          }}// Attach event handler for button click
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button> */}
      </div>
      )}



        

        <div className="profileDetails-div">
          <NavLink to="/cart" className="navLinkStyle">
            <p>
              <i className="fa fa-shopping-cart"></i>({cart.length})
            </p>
          </NavLink>

          <NavLink to="/wishList" className="navLinkStyle">
            <p>
              {" "}
              <i className="fa fa-heart" aria-hidden="true"></i>(
              {wishList.length})
            </p>
          </NavLink>

          <NavLink to="/user" className="navLinkStyle">
            <p>
              <i className="fa-solid fa-user"></i>
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
