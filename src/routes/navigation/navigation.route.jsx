import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as TheLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <TheLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
