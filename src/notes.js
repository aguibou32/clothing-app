// for react router: 
npm i react-router-dom

import { BrowserRouter} from "react-router-dom"; // This has to be wrapper on the app like the following:

<React.StrictMode>
<BrowserRouter>
    <App />
</BrowserRouter>
</React.StrictMode>


// Every component that we passed to Router, get passed 3 props (history, location and match) ; you can just receive the props on the component and clg them.
  

const HomePage = (props) => (
    console.log(props); // You cannot clg the props here because you are ommiting the return, to clg here, you have to change the component as the following 
    <div>
     <h1> Home Page</h1>
    </div>
  );


  const HomePage = (props) => {

  console.log(props); // Same function as above, only difference is you can clg here unlike above 
   return (
    <div>
     <h1> Home Page</h1>
    </div>
   )
    
  };


  <Route exact path="/" component={HomePage} />
  <Route path="/products" component={ProductPage} />
  <Route path="/products/:id" component={ProductDetailPage} />


  // He we are using exact on the first Route because of one reason:
  // localhost:3000/ is in part true for localhost:3000/products and localhost:3000/products/:id so the exact keyword fixes this. The isExact prop passed to the component validates this. Always makes sure the isExact is true for all your routes Boy



  // VERY FUCKING IMPORTANT, the id passed on the third route, can be accessible on the ProductDetails component (because remember every component passed in Route, receives 3 props, and the id is accessible in one of those props, in the match prop to be exact). To access the id, do the following {{props.match.params.id}}. clg it to be sure all the time.
  

  // One important thing, the 3 props passed by Route to the component, are only accessible to that specific component, it is not accessible to the children of that component

// WithRouter(MenuItem) allows us to receive the receive the 3 props passed from the Router to the HomePage without having to drill them because remember, Router passes the 3 props to HomePage (and it stops there) but we need the 3 props in MemuItem component so to avoid passing them from HomePage to Directory and from Directory to MenuItem, we use the withRouter HOC (Higher Order Component) directly in MenuItem to get the 3 props (history, location match)


// CLASS BASED COMPONENT IS USED WHEN WE NEED TO USE DATA IN THE COMPONENT, FUNCTIONAL COMPONENT WHEN DO NOT NEED DATA IN THE COMPONENT. WHENEVER WE NEED OUR FUNCTIONAL COMPONENTS TO HAVE STATE, WE USE HOOKS

// The reason we use id on each item is to help react not re-render all the list when one item changes, therefore it helps making it more efficient

// Do not forget adding props in the constructor and in the super() method)

constructor(props) {
  super(props);
  this.state = {
    collections: SHOP_DATA,
  };
}


// WHEN WE ARE PASSING THE DATA (SHOP_DATA) VERY IMPORTANT IMPORTANT TO REMEMBER IT IS AN ARRAY INSIDE ANOTHER ARRAY


// rfce to create a functional component, rcc to create a class component rfcr for redux to be add to the component

// React templates: https://themeforest.net/tags/react%20ecommercE TEMPLATES

// To determine where you should declare the state, always use a tree to make sure of it 



//************************************************************************************
                REACT FORM
// Whenever we create a form using state (not hooks here), we have to have function that handles when the inputbox changes onChange function otherwise the form will not work. We do it as the following 

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};

// AND we have to wire up this function to the onChange event of the input box like the following 

<input
name="email"
type="text"
value={this.state.email}
onChange={this.handleChange} // Here the wiring up is done 
required
/>

// CONVERTING Functional component to class component 


//***************************************************************************************************



//*************************************GOOGLE AUTH AND FIREBASE**************************************

npm i firebase 

and then create the config file 
// This goes to the config file 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDA28JPQhBTSM_w5yNM6M_sNJIMnGGTJwI",
    authDomain: "crown-db-e5755.firebaseapp.com",
    projectId: "crown-db-e5755",
    storageBucket: "crown-db-e5755.appspot.com",
    messagingSenderId: "745520322760",
    appId: "1:745520322760:web:2344264aedf28f743a2dfd",
    measurementId: "G-EZL9P1DG7F"
};

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  Remember when you importing signInWithGoogle, you import it like the following: {signInWithGoogle}

//****************************************************************************************************

Sign In / Sign Up with google, facebook, Github is called ondurationchange


Defining a className based of a prop
Import a default exported function: import createUser from '....'
Import a non default exported function: import {createUser} from '....'


handleChange = event => {
  // console.log(event.target); // prints out the whole input field                         
  const { name, value } = event.target; // we are desctructuring the name and value from the target (the target been the each and every FormInput). Doing it this way is advantegeous because it avoids repeating this.setState on each and every FormInput of the form. 
  this.setState({ [name]: value });
}


// In our render method, we can always destructure values from the state like the following 
const {email, password} = this.state;

// And then we do the following in our FormInput on the value target::
<FormInput
  value={email}
  onChange={this.handleChange}
/>

// Instead of the following
<FormInput
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            required
          />
          Question 1:
          





Whenever we call the onAuthStateChanged() or onSnapshot() methods from our auth  library or referenceObject, we get back a function that lets us unsubscribe from the listener we just instantiated. Which lifecycle method should we use to call that unsubscribe method in?

- componentWillUnmount is the reponse because:
Calling the unsubscribe function when the component is about to unmount is the best way to make sure we don't get any memory leaks in our application related to listeners still being open even if the component that cares about the listener is no longer on the page.





***********************************REDUX***************************************************************
npm i redux react-logger react-redux


// 1. we installing the redux library itself
// 2. we install a react middleware called react-logger which basically just sits between our actions and reducers. its logs the state before and after the action generator hits the reducer
// 3. react-redux is middleman that allows us to use redux 




// JUST LIKE THE BROWSERROUTER WE USED IN THE index.js TO MAKE ROUTING AVAILABLE TO ALL OUR APP, WE DO THE SAME FOR PROVIDER TO GIVE ACCESS TO THE STORE TO ALL OUR APPLICATION

const mapStateToProps = state => ({
  currentUser: state.user.currentUser // access the state, then the root reducer, the currentUser slice state
}
);
export default connect(mapStateToProps)(Header);

this function is a higher order function (Tony Stark and Iron Man Suit analogy) it allows us to connect to the redux store
{/* Before we started using redux we had to pass the current user state to the Header component to be used on the Sign In/Sign Out link */}

        <Header currentUser={this.state.currentUser}/>

        <Header/>  {/* Now that we have set up redux in our Header component, we dont need to pass the currentUser state as a prop anymore, we just render the Header app as it is*/}
        
