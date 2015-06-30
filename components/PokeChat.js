 /*
	MODULE Dependencies
 */
import React from 'react/addons'; //los Addons son como plugins que tienen q ser llamados 
import PokeMessage from './PokeMessage';

const { CSSTransitionGroup } = React.addons; // usaremos un addon para las animaciones, 
/*conesta delcaracion solo tomamos el atributo CSSTransitionGroup de el objeto addons esta manera de hacre
variables se llama theConstracties*/
export default class PokeChat extends React.Component {
  render() {
    return <ul className="pokechat">
      <CSSTransitionGroup transitionName= "message-animation">
      {
        this.props.messages.map((message) => {
          return <PokeMessage key={message.id} message={message} />
        })
      }
      </CSSTransitionGroup>
    </ul>
  }
}

PokeChat.defaultProps = { messages: [] };