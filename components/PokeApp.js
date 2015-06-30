  /*
	MODULE Dependencies
 */
import React from 'react';// Importamos react usando npm install --save react esto nostraera un modulo node para usar react 
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'
import uid from 'uid';
import $ from 'jquery';
import io from 'socket.io-client';

export default class PokeApp extends React.Component{
	//con este componente logramos la interaccion entre el pokechat y el poketable
	constructor(props) {
    super(props);
    this.state = { messages: [], pokemons: [],user:this.user };
    this.onGrowl = this.onGrowl.bind(this);
    this.user = uid(10);
  }
  // al momento de ser montada obtendremos de nuestra "base de datos" los pokemons 
  componentWillMount(){
    $.get('/pokemons',(pokemons)=> {
      this.setState({pokemons: pokemons});
    });
    this.socket= io('http://192.168.1.64:3000');
    this.socket.on('message', (message)=>{
      if (message.user !== this.user){
        this.newMessage(message);
      }
    });
  }
  // template string nos permite interpolar variables
	onGrowl(name) {
    let text = `${name}, ${name}!`;
    let message = { id: uid(), text: text, user: this.user };
    this.newMessage(message);
    this.socket.emit('message', message);
  }
	newMessage (message){
    this.state.messages.push(message);
    let messages = this.state.messages;
    this.setState({messages:messages});
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