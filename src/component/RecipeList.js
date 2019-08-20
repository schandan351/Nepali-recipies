import React,{Component}from 'react';
import Recipe from './Recipe';
export default class RecipiList extends Component{
  render(){
    const {recipies}=this.props;
    return(
      <>
        <div className="container py-5">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1>Recipi List</h1>
            </div>
          </div>
          <div className="row">
            {
              recipies.map(
                recipi=>(
                  <Recipe key={recipi.id} recipi={recipi}/>
                )
              )
            }
          </div>
        </div>
      </>
    )
  }
}