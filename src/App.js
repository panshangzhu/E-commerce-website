import React from 'react';
import './App.css';
import {Router,Route,Switch} from 'react-router-dom'
import history from './components/history'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import LocalShoppingCart from './components/LocalShoppingCart';
import DbShoppingCart from './components/DbShoppingCart';
import StoreClothing from './components/StoreClothing';
import StoreHome from "./components/StoreHome";
import StoreElectronic from "./components/StoreElectronic";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/localshoppingcart" component={LocalShoppingCart} />
         <Route path="/dbshoppingcart" component={DbShoppingCart} />
         <Route path="/store/clothing" component={StoreClothing} />
         <Route path="/store/electronic" component={StoreElectronic} />
         <Route path="/store/home" component={StoreHome} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
