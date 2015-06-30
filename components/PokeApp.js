  /*
	MODULE Dependencies
 */
import React from 'react';// Importamos react usando npm install --save react esto nostraera un modulo node para usar react 
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'
import uid from 'uid';
import $ from 'jquery';
//import pokemons from '../PokeData'
export default class PokeApp extends React.Component{
	//con este componente logramos la interaccion entre el pokechat y el poketable
	constructor(props) {
    super(props);
    this.state = { messages: [], pokemons: [] };
    this.onGrowl = this.onGrowl.bind(this);
  }
  componentWillMount(){
    $.get('/pokemons',(pokemons)=> {
      this.setState({pokemons: pokemons});
    });
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
   if (this.state.pokemons.length){
      return <div className="pokeapp">
        <PokeTable pokemons={this.state.pokemons} onGrowl={ this.onGrowl } />
        <PokeChat messages={this.state.messages} />
       </div>
    } else {
      return <p>CARGANDO</p>
    }
    
  }
}