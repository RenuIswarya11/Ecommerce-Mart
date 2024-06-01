import React from "react";
import "./Home.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Bg from "../../assets/smile.jpg";
import { categories } from "../../backend/db/categories";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Loader } from "../../components/Loader/Loader"


const Home = () => {

  const { isLoading, setIsLoading,checkboxHandler } = useContext(ProductsContext)

  const navigate = useNavigate();
            useEffect(() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
              }, 1000);
          
            }, [setIsLoading]);
  return (
    <>
    {isLoading && <Loader/>}
      <Navbar />
      <div className="home-div">
        <div className="hero-img" style={{ backgroundImage: `url(${Bg})` }}>
          <div className="overlay">
            <div className="overlay-text">
              <h1>Welcome to Our Mart!!</h1>

              <NavLink to="/products">
                <button>
                  Explore Our Products{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="category-cards">
          {categories.map((category) => (
            <div key={category._id} className="category-card">
              <h2>{category.categoryName}</h2>
              <img
                src={category.img}
                alt={category.categoryName}
                width="400px"
                height="250px"
              />
              <p>{category.description}</p>
              <button
                onClick={() => {
                  checkboxHandler(category.categoryName);
                  navigate("/products");
                }}
              >
                Explore {category.categoryName}{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>

        <div className="footer">
          <div className="footerHeader">
            Made with <i class="fa-brands fa-react"></i> by Renu Iswarya
          </div>
          <div className="socialLinks">
            <a
              className="link"
              href="https://github.com/Renu-Iswarya11/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              className="link"
              href="https://www.linkedin.com/in/RenuIswarya11/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
