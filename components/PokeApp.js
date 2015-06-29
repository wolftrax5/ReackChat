  /*
	MODULE Dependencies
 */
import React from 'react';// Importamos react usando npm install --save react esto nostraera un modulo node para usar react 
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'
import uid from 'uid';
//import pokemons from '../PokeData'
export default class PokeApp extends React.Component{
	//con este componente logramos la interaccion entre el pokechat y el poketable
	constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.onGrowl = this.onGrowl.bind(this);
  }
  // template string nos permite interpolar variables
	onGrowl(name) {
    	let text = `${name}, ${name}!`;
    	let message = { id: uid(), text: text };
    	this.state.messages.push(message);
   	    let messages = this.state.messages;
    	this.setState({ messages: messages });
  }
		
	// en PokeTable estamos pasando la funcion onGrow de un componente a otro y siempre esta bindieada a pokeapp
	 render() {
    let pokemons = [
      { number: 1, name: 'Bulbasaur' },
      { number: 2, name: 'Ivysaur' },
      { number: 3, name: 'Venusaur' }
    ];

    return <div className="pokeapp">
      <PokeTable pokemons={pokemons} onGrowl={ this.onGrowl } />
      <PokeChat messages={this.state.messages} />
    </div>
  }
}