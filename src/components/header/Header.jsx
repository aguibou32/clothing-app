import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

// connect is a higher order component that allows us to access stuff from react
import { connect } from 'react-redux';

// before using redux, this component Header was accessing the current user from the parent component App

function Header({ currentUser, hidden }) {
  // console.log('value of hidden from the store: ', hidden);
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
           Contact Us
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => { auth.signOut() }}>Sign Out</div>
        ) : (
          <Link className="option" to="/signIn">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

// the state here is from the redux store itself 
const mapStateToProps = state => ({
  currentUser: state.user.currentUser, // access the state, then the root reducer, the currentUser slice state
  hidden: state.cart.hidden
}
);

export default connect(mapStateToProps)(Header);

// After doing this, we no longer need to pass the currentUser from the App application to the Header application because the Header application now has access to the redux store. So we can remove the prop passed to the Header component in App
