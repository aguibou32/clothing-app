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


// CLASS BASED COMPONENT IS USED WHEN WE NEED TO USE DATA IN THE COMPONENT, FUNCTIONAL COMPONENT WHEN DO NOT NEED DATA IN THE COMPONENT

// The reason we use id on each item is to help react not re-render all the list when one item changes, therefore it helps making it more efficient

// Do not forget adding props in the constructor and in the super() method)

constructor(props) {
  super(props);
  this.state = {
    collections: SHOP_DATA,
  };
}


// WHEN WE ARE PASSING THE DATA (SHOP_DATA) VERY IMPORTANT IMPORTANT TO REMEMBER IT IS AN ARRAY INSIDE ANOTHER ARRAY


// rfce to create a functional component, rcc to create a class component 