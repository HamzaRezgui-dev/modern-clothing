import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {Route} from 'react-router-dom';
import { Switch } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";




const SneakersPage = ()=> (
  <div>
    <h1>Sneakers</h1>
  </div>
)

const MenPage = ()=> (
  <div>
    <h1>Men</h1>
  </div>
)

const WomenPage = ()=> (
  <div>
    <h1>Women</h1>
  </div>
)

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser: user});

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
 render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>

      
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signin" component={SignInAndSignUpPage}/>
        <Route exact path="/sneakers" component={SneakersPage}/>
        <Route exact path="/men" component={MenPage}/>
        <Route exact path="/women" component={WomenPage}/>
      </Switch>
     
    </div>
  );
 }
}

export default App;
