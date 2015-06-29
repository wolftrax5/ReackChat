 /*
	MODULE Dependencies
 */
import React from 'react'; // Importamos react usando npm install --save react esto nostraera un modulo node para usar react 

export default class PokeMessage extends React.Component {
  render() {
    return <li className="pokemessage">{this.props.message.text}</li>
  }
}