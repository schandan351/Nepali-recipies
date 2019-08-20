import React,{Component} from 'react';
import Search from '../component/Search';
import RecipiList from '../component/RecipeList';
import Recipe from '../component/Recipe';
export default class Recipes extends Component{
  constructor(props){
    super(props)
  }
  state={
    recipies:[{
      id:1,
      title:"Burger",
      img:"https://images.pexels.com/photos/161519/abstract-barbecue-barbeque-bbq-161519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id:1,
      title:"Chicken Roll",
      img:"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      id:1,
      title:"Chicken biryani",
      img:"https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }],
    search:''
  }
  handleChange=e=>{
    this.setState({
      search:e.target.value
    })
  }
  handleSubmit=e=>{
    e.preventDefault();
  }
  render(){
    return(
      <>
        <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <RecipiList recipies={this.state.recipies}/>
      </>
    );
  }
}