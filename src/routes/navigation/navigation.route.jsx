import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as TheLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/context";


const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser);
  console.log('from navgation seur');
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
