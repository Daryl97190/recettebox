import React, { Component } from "react";

class AjouterRecette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      image: "",
      ingredients: "",
      instructions: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const recette = { ...this.state };
    this.props.ajouterRecette(recette);

    this.setState({
      nom: "",
      image: "",
      ingredients: "",
      instructions: "",
    });
  }
  render() {
    return (
      <div className="card">
        <form
          className="admin-form ajouter-recette"
          onSubmit={this.handleSubmit}
        >
          <input
            value={this.state.nom}
            onChange={this.handleChange}
            name="nom"
            type="text"
            placeholder="Nom de la recette "
          />
          <input
            value={this.state.image}
            onChange={this.handleChange}
            name="image"
            type="text"
            placeholder="Nom de l'image"
          />
          <textarea
            value={this.state.ingredients}
            onChange={this.handleChange}
            name="ingredients"
            rows="3"
            placeholder="Liste des ingrédients"
          />
          <textarea
            value={this.state.instructions}
            onChange={this.handleChange}
            name="instructions"
            rows="15"
            placeholder="Liste des instructions"
          />
          <button type="submit">+ Ajouter une recette</button>
        </form>
      </div>
    );
  }
}

export default AjouterRecette;
