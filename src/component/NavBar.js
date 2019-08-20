import React from 'react';
import {Link} from "react-router-dom";
export default function NavBar(){
  return(
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">
        NEPALI RECIPES
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link className="nav-link" to="/recipies">Recipies</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}