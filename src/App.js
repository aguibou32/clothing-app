import React from "react";

import "./App.css";
import HomePage from './components/pages/homepage/HomePage';
import ShopPage from './components/shop/ShopPage';
import Header from './components/header/Header';
import SignInAndSignUp from './components/signInAndSignUp/SignInAndSignUp';

import { Route, Switch } from "react-router-dom";

import {auth, createUserProfileDocument} from './firebase/firebase.utils';


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

  constructor(){
    super();

    this.state = {
        currentUser : null
    }
  }

  componentDidMount() {

    // So remember one thing, when we click on the sign in with google, it returns an authenticated object of a user or else it returns null.
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){ // We are checking if the object returned is null or contains the actual authenticated object

        const userRef = await createUserProfileDocument(userAuth); // we calling this function to create a user in the database and returns us the reference of the user created (CHECK THE FUNCTION, THOSE ARE THE ONLY 2 GOALS of the function).

        userRef.onSnapshot(snapShot => { // We use the reference we got from the above method to get the data. 
          // console.log(snapShot.data());
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          }, ()=> console.log(this.state)); // Once we have the data, we set our state with it
        })
        
      }else{
        this.setState({currentUser:userAuth});
        // console.log(this.state)
      }

    });
  }
  // This is to avoid memory leakage 
  componentWillUnmount () {
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
  
        <Header currentUser={this.state.currentUser}/>
  
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
