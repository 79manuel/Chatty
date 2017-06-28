import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './NavBar.jsx';

const users = {
  currentUser: {name: "Test"},
  messages: [
    {
      username: "Senor Fluffyface",
      content: "Has anyone seen my marbles?",
      id:"01"
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
      id:"02"
    }
  ]
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = users;
  }

  makeNewMessage = (message) => {
      console.log(message.message, message.username);
      const newMessage = {id: Date.now(),
        username: message.username,
        content: message.message};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
  }

  broadcastMessage(message) {
    this.socket.send(message);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3000/');
    this.socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);
      const newMessages = this.state.messages.concat(newMessage);
      this.setState({
        messages: newMessages
      });
    });
  }


  render() {
    console.log('rendering App')
    return (
      <div>
        <Navbar />
        <MessageList messageList={this.state.messages}/>
        <ChatBar
          currentUser={this.state.currentUser.name}
          makeNewMessage={this.makeNewMessage}/>
      </div>
    );
  }
}
export default App;