import React,{Component} from 'react';
import Home from './pages/Home';
import Recipies from './pages/Recipes';
import SingleRecipies from './pages/SingleRecipies';
import Default from './pages/Default';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
export default class App extends Component{
  render(){
    return(
      <Router>
        <main>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/recipies' exact component={Recipies}/>
            <Route path='/recipies/:id' component={SingleRecipies}/>
            <Route component={Default}/>
          </Switch>
        </main>
      </Router>
    );
  }
}