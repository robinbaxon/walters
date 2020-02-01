import React from 'react';
import './App.css';
import Chocolatebar from "./components/chocolateBar/chocolatebar";
import RecipeButton from "./components/recipeButton/recipeButton";
import SpinningImage from "./components/spinningImage/spinningImage";
import getNewRecipe from "./recipe/getNewRecipe";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentRecipe: getNewRecipe()
        }
    };

    setNewRecipe = () => this.setState({ currentRecipe: getNewRecipe()});

    render() {
        return (
            <div>
                <header>
                    <SpinningImage></SpinningImage>
                    <h1>Din daglige Walters</h1>
                    <Chocolatebar recipe={this.state.currentRecipe} ></Chocolatebar>
                    <RecipeButton onClick={this.setNewRecipe} ></RecipeButton>
                </header>
            </div>
        );
    };




}
