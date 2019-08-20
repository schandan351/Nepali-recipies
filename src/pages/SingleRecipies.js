import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default class SingleRecipies extends Component{
  constructor(props){
    super(props);
    const id=this.props.match.params.recipe_id;
    this.state={
      recipies:{},
      id,
      loading:false
    }
  }
  async componentDidMount(){
    const url=`https://www.food2fork.com/api/get?key=33bb1b83ddcb7c9ad4866bbc35c7dd50&rId=${this.state.id}`;
    try {
      const response=await fetch(url);
      const responseData=await response.json();
      this.setState({
        recipies:responseData.recipe,
        loading:false
      })
    }catch(error){
      console.log(error);
    }
  };
 
  render(){
    const {image_url,publisher,publisher_url,source_url,title,ingredients}=this.state.recipies;
    
    if(this.state.loading){
      return(
        <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <h2 className="text-uppercase text-center">
              Loading....
            </h2>
          </div>
        </div>
      </div>
      )
    }
    return(
      <div className="container my-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Link to="/recipies" className="btn btn-success mt-3 text-uppercase">
              Backtorecipies
            </Link>
            <img src={image_url} alt="recipes" className="d-block w-100" style={{maxHeight:"30rem"}}/>
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <h5 className="text-capitalize">{title}</h5>
          </div>
        </div>
      </div>
    )
  }
}