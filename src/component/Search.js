import React,{Component}from 'react';
import {FaSearch} from "react-icons/fa"
export default class Search extends Component{
  render(){
    const {handleChange,handleSubmit,search}=this.props;
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 text-center mt-5">
            <h1 className="text-center text-uppercase">
              Search from Nepali recipies
            </h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <label htmlFor="search" className="text-capitalize">type recipies separated by comma</label>
              <div className="input-group">
                <input type="text"
                  name="search"
                  className="form-control"
                  placeholder="chicken,mutton,momos"
                  value={search}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <button type="submit" className=""><FaSearch/></button>
                </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}