import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';

import ShopPage from './page/shop/shop.component';

import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component.jsx';



function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  path='/signin' component={SignInAndSignUpPage} />

      </Switch>
    </div>
  );
}

export default App;
  