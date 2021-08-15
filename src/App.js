import React from "react";

import "./App.css";
import HomePage from "./components/pages/homepage/HomePage";
import ShopPage from "./components/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./components/signInAndSignUp/SignInAndSignUp";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1> Home Page</h1>
//     </div>
//   );
// };

// const ProductPage = () => (
//   <div>
//     <h1>Products Page</h1>
//   </div>
// );

// const ProductDetailPage = (props) => {
//   console.log(props);
//   console.log(props.match.params.id);
//   return (
//     <div>
//       <h1>Product Details Page</h1>
//     </div>
//   );
// };

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;

    // So remember one thing, when we click on the sign in with google, it returns an authenticated object of a user or else it returns null.
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // We are checking if the object returned is null or contains the actual authenticated object

        const userRef = await createUserProfileDocument(userAuth); // we calling this function to create a user in the database and returns us the reference of the user created (CHECK THE FUNCTION, THOSE ARE THE ONLY 2 GOALS of the function).

        userRef.onSnapshot((snapShot) => {
          // We use the reference we got from the above method to get the data.
          // console.log(snapShot.data());
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        // console.log(this.state)
      }
    });
  }
  // This is to avoid memory leakage
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductPage} />
          <Route path="/products/:id" component={ProductDetailPage} />
        </Switch> */}
        {/* Before we started using redux we had to pass the current user state to the Header component to be used on the Sign In/Sign Out link */}
        {/* <Header currentUser={this.state.currentUser}/> */}
        <Header />{" "}
        {/* Now that we have set up redux in our Header component, we dont need to pass the currentUser state as a prop anymore, we just render the Header app as it is*/}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          {/* <Route exact path="/signIn" component={SignInAndSignUp} /> */}

          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser, // access the state, then the root reducer, the currentUser slice state
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
