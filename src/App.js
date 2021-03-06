import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkoutpage/checkout.component";

import Header from "./components/header/header.component";
import {Route, Switch, Redirect} from 'react-router-dom';
import { auth, CreateUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectcurrentUser } from "./redux/user/user.selectors";


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await CreateUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => 
          {
            setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
                })
          })   
      }
      setCurrentUser(userAuth)
  
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 render(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  );
 }
}

const mapStatetoProps = createStructuredSelector({
  currentUser: selectcurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
