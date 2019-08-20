import React,{Component} from 'react';
import Search from '../component/Search';
import RecipiList from '../component/RecipeList';
export default class Recipes extends Component{
  constructor(props){
    super(props)
  }
  state={
    recipies:[{
      id:1,
      title:"hello",
      img:""
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