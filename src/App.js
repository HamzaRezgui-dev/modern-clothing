import React from "react";
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';


const HatsPage = ()=> (
  <div>
    <h1>Hats</h1>
  </div>
)

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

      
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>
        <Route exact path="/jackets" component={JacketsPage}/>
        <Route exact path="/sneakers" component={SneakersPage}/>
        <Route exact path="/men" component={MenPage}/>
        <Route exact path="/women" component={WomenPage}/>
    
     
    </div>
  );
}

export default App;
