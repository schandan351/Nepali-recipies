import React,{Component} from 'react';
import Header from '../component/Header';
import {Link} from 'react-router-dom';
export default class Home extends Component{
  render(){
    return(
      <Header title="Nepali recipies">
        <Link className="btn btn-dark btn-lg mt-3" to="/recipies" >Search recipies </Link>
      </Header>
    );
  }
}