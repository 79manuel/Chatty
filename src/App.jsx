import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './NavBar.jsx';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentUser: {name: "Mr Fluffyface"},
      messages: []
    };
  }

  makeNewMessage = (message) => {
      //console.log(message.message, message.username);
      const newMessage = {
        username: message.username,
        content: message.message
      };
      //const messages = this.state.messages.concat(newMessage);
      this.state.messages.concat(newMessage);
      //this.setState({messages: messages})
      this.broadcastMessage(JSON.stringify(newMessage))
  }

  broadcastMessage(message) {
    this.socket.send(message);
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.addEventListener('message', (event) => {
      const newMessage = JSON.parse(event.data);
      const newMessages = this.state.messages.concat(newMessage);
      console.log("componentdidmountrohit".newMessages);
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