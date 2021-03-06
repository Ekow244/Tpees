import React from 'react';
import './App.css';



import {Switch,Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './page/homepage/homepage.component';

import ShopPage from './page/shop/shop.component';

import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './page/checkout/checkout.component';
import Header from './components/header/header.component.jsx';
import {auth,createUserProfileDocument} from './firebase/firebase.util';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
 

  unsubscriberFromAuth=null;

  componentDidMount(){
    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      
      if (userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })
            });

        
      }

      else{
        setCurrentUser(userAuth);
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
     return (
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route  path='/shop' component={ShopPage} />
      <Route  exact path='/checkout' component={CheckoutPage} />
              
      <Route 
       exact 
       path='/signin' 
      render={()=>
        this.props.currentUser ? (
        <Redirect to='/' />
        ) : (
        <SignInAndSignUpPage />
        )
      } 
    />

      </Switch>
    </div>
    );
  }

 
}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
});


const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(
 
    mapStateToProps,
    mapDispatchToProps
  )(App);
  