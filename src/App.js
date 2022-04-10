import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import {Route} from 'react-router-dom';
import { Switch } from "react-router-dom";




const JacketsPage = ()=> (
  <div>
    <h1>Jackets</h1>
  </div>
)

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

function App() {
  return (
    <div>
      <Header/>
      <Switch>

      
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/jackets" component={JacketsPage}/>
        <Route exact path="/sneakers" component={SneakersPage}/>
        <Route exact path="/men" component={MenPage}/>
        <Route exact path="/women" component={WomenPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
