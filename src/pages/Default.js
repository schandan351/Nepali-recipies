import React,{Component} from 'react';
import Header from "../component/Header";
import {Link} from 'react-router-dom';
export default class Default extends Component{
  render(){
    return(
      <Header title="Error 404" styleClass="default-style">
        <h1>OPPS WRONG LINKS!!</h1>
        <Link to="/" className="mt-3 btn btn-primary btn-lg">Return Home</Link>
      </Header>
    );
  }
}