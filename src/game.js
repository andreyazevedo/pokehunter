import React from 'react';
import { getRandomInt } from './numbers';

import pokeballImage from './assets/pokeball.png';

const SPRITE_URL = 'http://floatzel.net/pokemon/black-white/sprites/images/';

// const getSpritePosition = ({ row, column }) = position => {
//   const 
// }

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonSprite: this.getRandomPkmSprite(),
    };
  }
  getRandomPkmSprite() {
    const number = getRandomInt(1, 151);

    return `${SPRITE_URL}${number}.png`;
  }

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const pokemon = this.refs.pokemon;
    const pokeball = this.refs.pokeball;

    pokemon.onload = () =>  {
      ctx.drawImage(pokemon, 100, 60);
    }

    pokeball.onload = () => {
      ctx.drawImage(pokeball, 0, 64, 64, 64, 0, 0, 64, 64);
    }
  }

  renderCanvas() {
    return <canvas width="300px" height="600px" ref="canvas" />;
  }

  renderImages() {
    return (<React.Fragment>
      <img ref="pokemon" alt="pokemon" src={this.state.pokemonSprite} hidden />
      <img ref="pokeball" alt="pokeball" src={pokeballImage} hidden />
    </React.Fragment>);
  }

  render() {
    return (
      <div style={{ background: '#8178a1', height: '300px' }}>
        {this.renderCanvas()}
        {this.renderImages()}
      </div>
    );
  }
}

export default Game;
