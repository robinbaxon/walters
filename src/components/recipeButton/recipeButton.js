import React from "react";
import './recipeButton.css'


export default class RecipeButton extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Bla i oppskriftene</button>
    }
}