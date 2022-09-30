import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as TheLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../context/context";
import { signOutUser } from "./../../utils/firebase/utils.firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown.jsx/cart-dropdown";
import { CartContext } from "../../context/cart-context";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  };
  const toggle = () => {
    setIsOpen(false);
  };
  return (
    <Fragment>
      <div className="nav-bar">
        <Link onClick={toggle} className="logo-container" to="/">
          <TheLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link onClick={toggle} className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
