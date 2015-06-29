  /*
	MODULE Dependencies
 */
import React from 'react';// Importamos react usando npm install --save react esto nostraera un modulo node para usar react 
import PokeAvatar from './PokeAvatar'; // como se esta untilizando PokeAvatar le indicamos desde que archivo se esta usando 
   
export default class PokeRow extends React.Component {
  onClick(ev) {
    this.props.growl.call(null, this.props.name)
  }

  render() {
    return <li className="pokerow" onClick={this.onClick.bind(this)}>
      <PokeAvatar number={this.props.number} />
      {this.props.name}
    </li>
  }
}