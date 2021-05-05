import React, { Component } from 'react'
import './App.css'
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

export default class App extends Component {

  state = {
    recipes: [],
    url: "https://www.food2fork.com/api/search?key=471e27f0a33619a546529ef39316e6a7&q=chicken%20breast&page=2",
    
    recipe_id: 0,

    page_index:1,
  }
  



async componentDidMount(){

  
    try{
      let data = await fetch(this.state.url);
     
      let jsonData = await data.json();
  
      console.log(jsonData);
      
      this.setState({
        recipes: jsonData.recipes
      })
  
  
    }catch(err){
      console.log(err);
    }
  
  }




  handleIndex = index => {

    this.setState({
      page_index: index,
    });
  }

  handleDetails = (p_index, id) => {

    this.setState({
      page_index: p_index,
      recipe_id: id,
    });
  }

  displayPage(index){

    switch(index){

      case 1 : 
        return (<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails}/>);

      case 0 : 
        return ( <RecipeDetails handleIndex={this.handleIndex} id={this.state.recipe_id}/>);
      
    }

  }


 
  
  render() {

    return (
      <React.Fragment>
          {this.displayPage(this.state.page_index)}
      </React.Fragment>

    )
  }
}
