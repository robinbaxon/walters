import React from "react";
import './chocolatebar.css'

export default class Chocolatebar extends React.Component {
    renderRecipeText() {
        return <span>{this.props.recipe}</span>
    };
    render() {
        return <p>{this.renderRecipeText()}</p>
    }
}
