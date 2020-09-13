import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../common/StateProvider";
import { auth } from "../../common/firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => (user ? auth.signOut() : null);
  return (
    <nav className="header">
      <div>
        <Link className="header__link" to="/">
          <img className="header__logo" src={Logo} alt="" />
          <p className="header__text">
            New Modern Machine <br />
            Store
          </p>
        </Link>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={handleAuth}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : ""}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* <Link to="/orders" className="header__link">
          <span className="header__optionLineOne">Returns &</span>
          <span className="header__optionLineTwo">Orders</span>
        </Link> */}
        <Link to="/checkout" className="header__link checkout_link">
          <ShoppingCartIcon className="header__cartIcon" />
          <span className="header__cartCount">{basket.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
