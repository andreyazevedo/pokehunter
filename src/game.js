import React from 'react';
import trainerImage from './assets/pokemon_trainer_01.png';
import { getRandomInt } from './numbers';

const SPRITE_URL = 'http://floatzel.net/pokemon/black-white/sprites/images/';

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
    const trainer = this.refs.trainer;

    pokemon.onload = () =>  {
      ctx.drawImage(pokemon, 160, 20);
    }

    trainer.onload = () => {
      ctx.drawImage(trainer, 40, 137);
    }
  }

  renderCanvas() {
    return <canvas width="300px" height="200px" ref="canvas" />;
  }

  renderImages() {
    return (<React.Fragment>
      <img ref="pokemon" alt="pokemon" src={this.state.pokemonSprite} hidden />
        <img ref="trainer" alt="trainer" src={trainerImage} hidden />
    </React.Fragment>);
  }

  render() {
    return (
      <div style={{ background: '#8178a1', height: '200px' }}>
        {this.renderCanvas()}
        {this.renderImages()}
      </div>
    );
  }
}

export default Game;
