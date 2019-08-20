import React,{Component}from 'react';
import {Link} from 'react-router-dom';
export default class RecipiList extends Component{
  render(){
    const {id,title,img}=this.props.recipi;
    return(
      <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
        <div className="card" style={{height: "100%"}}>
          <img src={img} alt="food_image" className="card-img-top" style={{height:"17rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="card-footer">
              <Link to={`/recipies/${id}`} className="btn btn-primary text-capitalize mx-2">Detail</Link>
              <a href="/" className="btn btn-primary" target="_blank">SourceLink</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}