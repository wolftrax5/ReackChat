 /*
	MODULE Dependencies
 */
import React from 'react'; // Importamos react usando npm install --save react esto nostraera un modulo node para usar react 

 	class PokeAvatar extends React.Component {
    	constructor(props) {
          super(props);
          this.url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
          // llega hasta 721.png  
          // esta es una api REST http://pokeapi.co/media/img/718.png pero llega ahasta el 718
        }
        render() {
          return <div className="avatar-container">
            <img src={this.url} className="avatar" />
          </div>
        }
      }

export default PokeAvatar;