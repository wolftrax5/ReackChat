/*
  MODULE Dependencies
 */
import React from 'react';// Importamos react usando npm install --save react esto nostraera un modulo node para usar react 
import PokeRow from './PokeRow';// como se esta untilizando PokeRow le indicamos desde que archivo se esta usando 
export default class PokeTable extends React.Component {
  render() {
    return <ul className="poketable">
      {
        this.props.pokemons.map((pokemon) => {
          return <PokeRow
            key={pokemon.number}
            name={pokemon.name}
            number={pokemon.number}
            growl={this.props.onGrowl} />
        })
      }
    </ul>
  }
}