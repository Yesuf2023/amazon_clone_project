import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthetication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header__top">
      <div className="header">
        <div className="header__main">
          <Link to="/">
            <img
              className="header__logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon logo"
            />
          </Link>
          <div>
            <select className="header__dropdwon">
              <option value="All Departments">All Departments</option>
              <option value="Books">Books</option>
              <option value="Amazon Pharmacy">Amazon Pharmacy</option>
              <option value="Appliances">Appliances</option>
              <option value="Movies and TV">Movies and TV</option>
              <option value="Clothing, Shoes and Jewelry">
                Clothing, Shoes and Jewelry
              </option>
              <option value="Sport and outdoors">Sport and outdoors</option>
              <option value="Pet Supplies">Pet Supplies</option>
            </select>
          </div>
          <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
          </div>
          <div className="header__nav">
            <Link to={!user && "/login"} className="header__clearlink">
              <div onClick={handleAuthetication} className="header__option">
                <span className="header__optionLineOne">
                  Hello {!user ? "Guest" : user.email}
                </span>
                <span className="header__optionLineTwo">
                  {" "}
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>
            <Link to ='/orders'className="header__clearlink">
              <div className="header__option">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo"> & Orders</span>
              </div>
            </Link>
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
            <Link to="/checkout"className="header__clearlink">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span className="header__optionLineTwo header__basketCount">
                  {basket.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="header__menu">
        <div className="header__menutext">All</div>
        <div className="header__menutext">Medical Care</div>
        <div className="header__menutext">Best Sellers</div>
        <div className="header__menutext">Amazon Basics</div>
        <div className="header__menutext">Customer Service</div>
        <div className="header__menutext">Music</div>
        <div className="header__menutext">New Releases</div>
        <div className="header__menutext">Prime</div>
        <div className="header__menutext">Today's Deals</div>
        <div className="header__menutext">Books</div>
        <div className="header__menutext">Fashin</div>
        <div className="header__menutext">Amazon Home</div>
        <div className="header__menutext">Pharmacy</div>
      </div>
    </div>
  );
}

export default Header;
