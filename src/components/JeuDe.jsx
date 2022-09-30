import React, { Component } from "react";

class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };

    this.jouer = this.jouer.bind(this);
    this.initialiser = this.initialiser.bind(this);
  }
  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    let fin = false;
    if (this.props.cache == valeur) fin = true;
    this.setState({
      face: valeur,
      compteur: this.state.compteur + 1,
      fin: fin,
    });
  }
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }
  render() {
    return (
      <div className="jeude">
        <img src={require("../images/jeuDe.png")} />
        <h1>Jeu de Dé</h1>
        <h2>face: {this.state.face} </h2>
        <h2>nombre d'essais {this.state.compteur}</h2>
        {!this.state.fin ? (
          <button onClick={() => this.jouer()}>jouer</button>
        ) : (
          <div>
            <p>Bravo vous avez trouvez la face cachée.....</p>
            <button onClick={() => this.initialiser()}>Initialiser</button>
          </div>
        )}
      </div>
    );
  }
}

export default JeuDe;
