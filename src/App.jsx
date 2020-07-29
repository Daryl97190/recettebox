import React, { Component } from "react";
import Header from "./components/Header.jsx";
import recettes from "./recettes";
import "./App.css";
import Admin from "./components/Admin.jsx";
import Card from "./components/Card.jsx";

// firebase
import base from "./base.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pseudo: this.props.match.params.pseudo,
      recettes: {},
    };
    this.chargerExemple = this.chargerExemple.bind(this);
    this.ajouterRecette = this.ajouterRecette.bind(this);
    this.majRecette = this.majRecette.bind(this);
    this.supprimerRecette = this.supprimerRecette.bind(this)
  }
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: "recettes",
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  ajouterRecette(recette) {
    const recettes = { ...this.state.recettes };
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({
      recettes: recettes,
    });
  }
  majRecette(key,newRecette) {
    const recettes = { ...this.state.recettes };
    recettes[key] = newRecette;
    this.setState({
      recettes: recettes
    });
  }
  supprimerRecette(key) {
    const recettes = { ...this.state.recettes };
recettes[key] = null;
this.setState({
  recettes : recettes
})

  }
  chargerExemple() {
    this.setState({
      recettes: recettes,
    });
  }
  render() {
    const cards = Object.keys(this.state.recettes).map((key) => (
      <Card key={key} details={this.state.recettes[key]} />
    ));

    return (
      <div className="box">
        <Header pseudo={this.state.pseudo} />
        <div className="cards">{cards}</div>
        <Admin
        recettes={this.state.recettes}
          chargerExemple={this.chargerExemple}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}

        />
      </div>
    );
  }
}

export default App;
