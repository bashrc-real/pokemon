import React, { Component } from "react";
import "../css/Pokecard.css";
import Flip from "react-reveal/Flip";

// const POKE_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    let name = this.props.name;
    let type = this.props.type;
    let exp = this.props.exp;
    let width = 95;

    if (this.props.usedAs === "ComputerCardUage") {
      imgSrc = "ultraball.png";
      name = "Pokemon";
      type = "??";
      exp = "??";
      width = 60;
    }

    return (
      // <div className={this.state.animate ? " animate" : ""}>
      <Flip bottom cascade duration={1600}>
        <div
          className="Pokecard"
          onClick={() => this.props.onClick(this.props.id)}
        >
          <h6 className="Pokecard-title">{name}</h6>
          <div className="Pokecard-image">
            <img src={imgSrc} alt={this.props.name} width={width} />
          </div>
          <div className="Pokecard-data">Type: {type}</div>
          <div className="Pokecard-data">EXP: {exp}</div>
        </div>
        {/* // </div> */}
      </Flip>
    );
  }
}

export default Pokecard;
