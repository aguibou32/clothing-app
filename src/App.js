import "./App.css";
import HomePage from './components/pages/homepage/HomePage';
import ShopPage from './components/pages/shop/ShopPage';

import { Route, Switch } from "react-router-dom";

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

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductPage} />
        <Route path="/products/:id" component={ProductDetailPage} />
      </Switch> */}

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
