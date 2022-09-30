import React, { Component } from "react";

class JeuDe extends Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }
  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    //completer le code
  }
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }
  render() {
    return (
      <div className="jeude">
        <img src={require('../images/jeuDe.png')} />
        <h1>Jeu de Dé</h1>
        <h2>face:….. </h2>
        <h2>nombre d'essais…..</h2>
        <button onClick={() => this.jouer()}>jouer</button>
        <p>Bravo vous avez trouvez la face cachée.....</p>
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </div>
    );
  }
}

export default JeuDe;
