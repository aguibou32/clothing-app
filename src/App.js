import './App.css';
import HomePage from './components/pages/homepage/HomePage';
import Products from './components/pages/Products';

import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
